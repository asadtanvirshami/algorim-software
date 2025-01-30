"use client";
import React, { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { authApi } from "@/service/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// import { userSignUpRequest } from "@/api/user/user-api";

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Auth = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, isSetLoading] = useState(false);
  const [form, setForm] = React.useState<SignUpForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSetLoading(true);
    try {
      const request = await authApi.signup(
        form.firstName,
        form.lastName,
        form.email.toLowerCase(),
        form.password
      );
      if (request?.data?.message === "success") {
        toast({
          variant: "success",
          title: "You are registered successfully",
          description: "Redirecting to the sign 7in.",
          duration: 800,
        });
        isSetLoading(false);
        router.push("/auth/signin");
      }
    } catch (error) {
      console.error(error);
      isSetLoading(false);
      toast({
        variant: "destructive",
        title: "Failed to sign in",
        description: error?.response?.data?.message || "Something went wrong",
        duration: 800,
      });
    }
  };

  return (
    <div
      data-cy="main-grid"
      className="grid items-center justify-center h-screen w-screen"
    >
      <div className="lg:grid bg-gradient-to-r dark:bg-black  bg-white lg:grid-cols-2 xl:grid xl:grid-cols-3 md:grid grid-cols-2 w-screen  ">
        <div className="hidden sm:flex h-screen align-middle justify-center items-center xl:col-span-2">
          <div className="justify-center align-middle items-center">
            {/* <h1 className="mx-auto text-8xl font-bold text-rose-500"> */}
            <h1 className="mx-auto text-[13rem] font-[family-name:var(--font-revamped)] font-semibold dark:text-white text-black">
              ALGORIM
            </h1>
          </div>
        </div>
        <div className="flex h-screen align-middle justify-center font-[family-name:var(--font-redhat)] items-center dark:bg-black  border-silver-500 border border-r-1  bg-white">
          <div className=" justify-center align-middle">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className="text-3xl">Sign Up</CardTitle>
                <CardDescription>
                  Enter your account credentials to signin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    handleSignup(e);
                  }}
                >
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        onChange={(e) =>
                          setForm({
                            ...form,
                            firstName: e.target.value,
                          })
                        }
                        required
                        id="fname"
                        name="fname"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        onChange={(e) =>
                          setForm({
                            ...form,
                            lastName: e.target.value,
                          })
                        }
                        required
                        id="lname"
                        name="lname"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Password</Label>
                      <Input
                        onChange={(e) =>
                          setForm({
                            ...form,
                            password: e.target.value,
                          })
                        }
                        id="password"
                        name="password"
                        placeholder="*********"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-sm mt-4">
                    Already have an account?{" "}
                    <Link href={"/auth/signin"} className="text-blue-500">
                      Signin here.
                    </Link>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="border-darkGray bg-darkGray text-white"
                    >
                      Signin{" "}
                      {!isLoading && (
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      )}
                      {isLoading && <Loader2 className=" animate-spin" />}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end"></CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Auth);
