import React from "react";
import moment from "moment";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Files, FileText, Link, Settings, UserCheck2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InfoSection = ({ project }) => {
  console.log(project);

  return (
    <React.Fragment>
      <div className="grid lg:grid xl:grid w-full lg:grid-cols-2  md:grid-cols-3  xl:grid-cols-3 mt-5 gap-4 ">
        {/*Project Detail Card */}
        <Card
          className={
            project?.projectInfos.length > 0
              ? "h-[300px] w-full"
              : "h-[300px] w-[400px]"
          }
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Detail <FileText />{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <dl>
                <dt>{project?.title || "No Title"}</dt>
                <dd>
                  {project?.description.slice(0, 100) || "No Description"}
                  {project.description.length > 100 && (
                    <Dialog>
                      <DialogTrigger className="border ml-1 text-sm px-2 rounded-lg">
                        View full
                      </DialogTrigger>
                      <DialogContent>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              project?.description ||
                              "<p>No description available.</p>",
                          }}
                        />
                      </DialogContent>
                    </Dialog>
                  )}
                </dd>
              </dl>
              <span>
                Created At: {moment(project?.created_at).format("lll") || ""}
              </span>
              <div className="flex gap-5">
                <dl className="bg-green-400 w-full  rounded-lg text-white text-sm p-2">
                  <dt> Start Date:</dt>
                  <dd>
                    {project?.start_date
                      ? moment(project?.start_date).format("lll")
                      : "Not Started"}
                  </dd>
                </dl>
                <dl className="bg-red-400 rounded-lg w-full text-white text-sm p-2">
                  <dt>End Date:</dt>
                  <dd>
                    {project?.end_date
                      ? moment(project?.end_date).format("lll")
                      : "Not Ended"}
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
        {/*Project Manager Card */}
        <Card className="h-[300px]  w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Manager <UserCheck2 />{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {project?.projectInfos.length > 0 && (
              <div className="space-y-5">
                {project?.projectInfos?.map((item) => {
                  return (
                    <div>
                      <ul className="space-y-2 ">
                        <li className="flex gap-2">
                          <p>Name:</p>
                          <p>{item?.project_manager_name}</p>
                        </li>
                        <li className="flex gap-2">
                          <p>Email:</p>
                          <p>{item?.project_manager_email}</p>
                        </li>
                        <li className="flex gap-2">
                          <p>Phone:</p>
                          <p>{item?.project_manager_phone}</p>
                        </li>
                        <li className="flex gap-2">
                          <p>Meeting Link:</p>
                          <p className="text-blue-400 underline">
                            {item?.meeting_link}
                          </p>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
            {project?.projectInfos.length === 0 && (
              <p>No manager assigned yet.</p>
            )}
          </CardContent>
        </Card>
        {/*Project Links Card */}
        <Card className="h-[300px]  w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Other Links <Link />{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {project?.projectInfos.length === 0 && <p>No links added.</p>}
            {project.projectInfos.length > 0 && (
              <div className="space-y-5">
                {project?.projectInfos?.map((item) => {
                  return (
                    <div>
                      {item?.links?.map((link, index) => {
                        return (
                          <>
                            {item.links.length > 0 ? (
                              <ul key={index} className="space-y-2">
                                {Object.keys(link).map((key) => (
                                  <>
                                    <li key={key} className="flex gap-2">
                                      <p className="font-bold">{key}: </p>{" "}
                                      <p className="text-blue-400 underline">
                                        {link[key]}
                                      </p>
                                    </li>

                                    <Separator />
                                  </>
                                ))}
                              </ul>
                            ) : (
                              "No links added."
                            )}
                          </>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:flex lg:flex w-full mt-5 gap-4 ">
        {/*Project Services Card */}
        <Card className="h-[300px] w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Service <Settings />{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {project?.services.length === 0 && <p>No services selected.</p>}
            {project?.services.length > 0 && (
              <div className="space-y-5">
                {project?.services.map((item) => {
                  return (
                    <div>
                      <ul className="space-y-2 ">
                        <li className="flex gap-2">
                          <p>
                            <Settings />
                          </p>
                          <p>{item?.service_name}</p>
                        </li>
                      </ul>
                      <Separator className="mt-2" />
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
        {/*Project Document Card */}
        <Card className="h-[300px] w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Documents <Files />{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {project?.documents.length === 0 && <p>No documents uploaded.</p>}
            {project?.documents.length > 0 && (
              <div className="space-y-5">
                {project?.documents?.map((item) => {
                  return (
                    <div>
                      <ul className="space-y-2 ">
                        <li className="flex gap-2">
                          <p>
                            <Settings />
                          </p>
                          <p>{item?.service_name}</p>
                        </li>
                      </ul>
                      <Separator className="mt-2" />
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default InfoSection;
