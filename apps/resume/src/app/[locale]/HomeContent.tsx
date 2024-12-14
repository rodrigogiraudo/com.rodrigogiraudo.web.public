import { useTranslations } from "next-intl";
import Experience from "@/components/experience/page";
import { IContractProps } from "@/components/experience/contract/page.interface";

export default function HomeContent({ contracts }: { contracts: IContractProps[] }) {
  const translate = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>{translate("title")}</div>
      <Experience contracts={contracts} />
    </main>
  );
} 