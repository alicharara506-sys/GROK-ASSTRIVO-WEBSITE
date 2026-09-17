import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BotPage } from "@/components/bot/BotPage";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { FLEET, getFleetMember, isFleetId } from "@/lib/fleet";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return FLEET.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getFleetMember(slug);
  if (!member) {
    return { title: "Fleet" };
  }
  return {
    title: `${member.name} — ${member.role}`,
    description: `${member.creed} ${member.overview}`,
  };
}

export default async function FleetMemberPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isFleetId(slug)) notFound();
  const member = getFleetMember(slug);
  if (!member) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <BotPage member={member} />
      </main>
      <SiteFooter />
    </>
  );
}
