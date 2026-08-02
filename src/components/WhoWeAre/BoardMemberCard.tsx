import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Locale } from "@/components/Providers/LocaleProvider";
import type { BoardMember } from "@/lib/types";

export const BoardMemberCard = ({
  member,
  locale,
}: {
  member: BoardMember;
  locale: Locale;
}) => {
  const name = locale === "ar" ? member.nameAr : member.nameEn;
  const bio = locale === "ar" ? member.bioAr : member.bioEn;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="relative pt-[100%] bg-gray-100">
            <Avatar className="absolute inset-0 w-full h-full rounded-none">
              {member.imageUrl ? (
                <AvatarImage
                  src={member.imageUrl}
                  alt={name}
                  className="object-cover"
                />
              ) : null}
              <AvatarFallback className="rounded-none text-4xl font-semibold">
                {name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardContent className="p-4 bg-white">
            <h3 className="font-semibold text-lg text-primary mb-1">{name}</h3>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            {name}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 min-w-0">
          <div className="flex min-w-0 flex-col items-start gap-6 sm:flex-row">
            <Avatar className="h-24 w-24 shrink-0">
              {member.imageUrl ? (
                <AvatarImage src={member.imageUrl} alt={name} />
              ) : null}
              <AvatarFallback className="text-2xl">
                {name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div
              dangerouslySetInnerHTML={{ __html: bio }}
              className="max-h-[55vh] min-w-0 flex-1 overflow-y-auto break-words pr-2 leading-relaxed text-gray-700 [&_p]:mb-4 [&_p:last-child]:mb-0"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
