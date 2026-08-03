import React from "react";
import { User } from "lucide-react";
import type { Locale } from "@/components/Providers/LocaleProvider";
import { translations } from "./translations";
import { BoardMemberCard } from "./BoardMemberCard";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import { featuredBoardMembers } from "./teamHighlights";
import type { BoardMember } from "@/lib/types";

const normalizeName = (name: string) =>
  name.toLocaleLowerCase().replace(/[^a-z0-9\u0600-\u06ff]/g, "");

const mergeByName = (featured: BoardMember[], current: BoardMember[]) => {
  const seen = new Set<string>();
  return [...featured, ...current].filter((member) => {
    const key = normalizeName(member.nameEn);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const TeamSection = async ({ locale }: { locale: Locale }) => {
  const boardMembers = await fetchQuery(
    api.boardMembers.queries.getBoardMembers,
    { publishedOnly: true },
  );

  const currentBoardMembers = (boardMembers ?? []).filter(
    (member) => member.type === "board",
  );
  const advisors = (boardMembers ?? []).filter(
    (member) => member.type === "advisor",
  );
  const allBoardMembers = mergeByName(
    featuredBoardMembers,
    currentBoardMembers,
  );

  return (
    <section
      id="our-team"
      className="bg-white py-16"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
          {translations.team.title[locale]}
        </h2>

        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="mb-5 flex items-center text-xl font-semibold text-primary">
              <User className="me-2 h-5 w-5" />
              {translations.team.sections.boardMembers[locale]}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allBoardMembers.map((member) => (
                <BoardMemberCard
                  key={member.id}
                  member={member}
                  locale={locale}
                />
              ))}
            </div>
          </div>

          {advisors.length > 0 && (
            <div>
              <h3 className="mb-5 flex items-center text-xl font-semibold text-primary">
                <User className="me-2 h-5 w-5" />
                {translations.team.sections.advisoryCommittee[locale]}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {advisors.map((member) => (
                  <BoardMemberCard
                    key={member.id}
                    member={member}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
