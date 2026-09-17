import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BotPage } from "@/components/bot/BotPage";
import { FLEET, getFleetMember } from "@/lib/fleet";
import { SITE_NAME } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return FLEET.map((member) => ({ slug: member.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getFleetMember(slug);
  if (!member) {
    return { title: SITE_NAME };
  }
  return {
    title: `${member.name} — ${member.role}`,
    description: `${member.creed} ${member.owns}`,
  };
}

export default async function FleetMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getFleetMember(slug);
  if (!member) notFound();
  return <BotPage member={member} />;
}
