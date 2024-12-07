import { useTranslations } from "next-intl";


export default function Home() {
  const translate = useTranslations("Index");
  return <main className="flex min-h-screen flex-col items-center justify-center">{translate("title")}</main>;
}
