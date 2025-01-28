"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginWithGithub from "./LoginWithGithub";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginWithCreds } from "@/actions/auth";
import LoginWithGoogle from "./LoginWithGoogle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Bounce } from "react-toastify";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isloading, setloading] = useState(false);
  const submithandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await loginWithCreds(formData);
      if (result?.error) {
        toast.error("Invalid Credentials");
      } else {
        toast.success("Login Successful!");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">IIT KIRBA</CardTitle>
          <CardDescription>
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submithandler}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                {/* <LoginWithGithub /> */}
                <LoginWithGoogle />
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                    name="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    id="password"
                    placeholder="*********"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isloading ? <AiOutlineLoading3Quarters className="animate-spin"/> : "Login"}
                </Button>
              </div>
              <div className="text-center text-sm"> No need to sign up <br/>You can directly login! 🙃</div>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
