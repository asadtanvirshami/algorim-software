"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userApi } from "@/service/user/index"; // Assume you have a userApi for creating users
import { Dot, Loader2 } from "lucide-react";
import { useState } from "react";
import { IconEditCircle, IconEditCircleOff } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import { updateSuccess } from "@/redux/actions/user-action";
import Cookies from "js-cookie";
// Define the validation schema using Zod
const formSchema = z.object({
  id: z.string().optional(),
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address" }),
});

const passwordSchema = z.object({
  old_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  new_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const UserForm = () => {
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.user?.user);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    values: {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
  });
  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data:any) => userApi.update(data),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Cookies.set("user", JSON.stringify(data), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("token", data?.accessToken, {
        secure: true,
        sameSite: "Strict",
        expires: 1,
      });
      dispatch(
        updateSuccess({
          sub: data?.user?.id,
          firstName: data?.user?.firstName,
          lastName: data?.user?.lastName,
          email: data?.user?.email,
          role: data?.user?.role,
        })
      );
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  const passwordMutation = useMutation({
    mutationFn: (data) => userApi.resetPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (values) => {
    const newValue = { ...values, id: user?.sub };
    mutation.mutate(newValue);
  };
  const onResetPassword = (values) => {
    const newValue = { ...values, id: user?.sub };

    passwordMutation.mutate(newValue);
    passwordMutation.isError && setErrorMessage("Password not updated");
    passwordMutation.isSuccess && setSuccessMessage("Password updated");
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-left"
        >
          {!editMode && (
            <IconEditCircle
              className="float-right"
              onClick={() => setEditMode(true)}
            />
          )}
          {editMode && (
            <IconEditCircleOff
              className="float-right"
              onClick={() => setEditMode(false)}
            />
          )}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={editMode ? false : true}
                      placeholder="Enter your first name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your full name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={editMode ? false : true}
                      placeholder="Enter your last name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your last name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={editMode ? false : true}
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center items-center">
              {editMode && (
                <Button
                  variant="outline"
                  className=" w-28 bg-green-500"
                  type="submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Save"
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
      <Form {...passwordForm}>
        <Separator />
        <form onSubmit={passwordForm.handleSubmit(onResetPassword)}>
          <div>
            <ul
              onClick={() => {
                setPassword(!password),
                  setErrorMessage(""),
                  setSuccessMessage("");
              }}
              className="text-sm flex items-center mb-3"
            >
              <Dot />
              Change Password?
            </ul>
            {password && (
              <FormField
                control={passwordForm.control}
                name="old_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input
                        type="old_password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Fill with your current password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="h-3" />
            {password && (
              <FormField
                control={passwordForm.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your password must be at least 8 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {password && (
              <Button
                variant="outline"
                className=" w-28 bg-green-500 mt-4 float-right"
                type="submit"
                disabled={passwordMutation.isPending}
              >
                {passwordMutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save"
                )}
              </Button>
            )}
            {password && (
              <>
                {errorMessage && passwordMutation.isError && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
                {successMessage && passwordMutation.isSuccess && (
                  <p className="text-green-500 text-sm mt-2">
                    {successMessage}
                  </p>
                )}
              </>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default UserForm;
