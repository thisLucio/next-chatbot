'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from 'ai/react'


export function Chat(){
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return(
        <Card className="w-[440px] h-[700px] bg-slate-50 grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>LB</AvatarFallback>
              <AvatarImage src="https://github.com/thislucio.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">thislucio:</span>
              Como usar Ts com react?</p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              {/*Eu estava sem ideia para ico*/}
              <AvatarImage src="https://github.com/github.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">ChatGPTeta:</span>
              Sei lá porra kkkkk
              </p>
          </div>
        </CardContent>
        <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                <Button type="submit">Send</Button>
            </form>
        </CardFooter>
      </Card>
    )
}