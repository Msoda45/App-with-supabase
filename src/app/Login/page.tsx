import React from 'react'
import {Card , CardHeader, CardContent,CardTitle,CardDescription} from "@/components/ui/card";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
function page() {
    const t = useTranslations("login");
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Card className = "w-1/4 py-2">
            <CardHeader>
                <CardTitle className ="text-3xl font-semibold">{t("title")}</CardTitle>
                <CardDescription>{t("desc")}</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='w-full grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "email">{t("email")}</Label>
                        <Input type='email' id='email' required name='email' className='rounded-full' placeholder={t("plasholder.email")} />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "password">{t("password")}</Label>
                        <Input type='password' id='password' required name='password' className='rounded-full' placeholder={t("plasholder.password")}/>
                    </div>
                    <Button className="rounded-full">{t("btn_signin")}</Button>
                </form>
                <div>
                    <Link href="forgot-password" className='hover:cursor-pointer hover:text-gray-500' >{t("forget_password")}</Link>
                </div>
                <div className='w-full grid gap-2'>
                    <div className='border w-full text-center py-2 px-6 rounded-full'>{t("sign_iv_with_google")}<span className='text-red-500'>Google</span></div>
                    <div className='border w-full text-center py-2 px-6 rounded-full'>{t("sign_in_with_github")}<span className='text-purple-500'>GitHub</span></div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default page
