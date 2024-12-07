import { useTranslations } from "next-intl";

export default function NotFound() {
  const translate = useTranslations("NotFound");
  return <div>{translate("title")}</div>;
}
