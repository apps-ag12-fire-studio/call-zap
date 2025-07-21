"use client";

import { useState, type FormEvent } from "react";
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
import { Loader2, MessageSquare, Terminal } from "lucide-react";

export default function Home() {
  const [inputValue, setInputValue] = useState("ping");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");
    setError("");

    try {
      const res = await fetch("/api/pong", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputValue }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.reply || "Network response was not ok");
      }
      
      setResponse(data.reply);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">
              Pong Test Assistant
            </CardTitle>
            <CardDescription>
              Enter 'ping' to test the endpoint, or any other text for a
              different response.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-input">Command</Label>
                <Input
                  id="text-input"
                  placeholder="e.g., ping"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  autoComplete="off"
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Pinging...
                  </>
                ) : (
                  "Send Command"
                )}
              </Button>
            </CardContent>
          </form>
          {(response || error) && (
            <CardFooter>
              <div className="w-full">
                {response && (
                  <div className="mt-4 rounded-lg bg-muted p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Terminal className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          Server Response:
                        </p>
                        <p className="font-mono text-sm text-muted-foreground">
                          {`{ "reply": "${response}" }`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </CardFooter>
          )}
        </Card>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          This app demonstrates a serverless function endpoint.
        </p>
      </div>
    </div>
  );
}
