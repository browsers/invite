"use client";

import type { ReactNode } from "react";
import GlideSelect from "./GlideSelect";

type Option = { label: string; href: string };

type Props = {
  options: Option[];
  trigger: ReactNode;
  ariaLabel: string;
};

export default function SocialMenu({ options, trigger, ariaLabel }: Props) {
  return (
    <GlideSelect
      options={options.map((o) => ({ value: o.href, label: o.label }))}
      triggerContent={trigger}
      hoverOpen
      onChange={(value) => window.open(value, "_blank", "noopener,noreferrer")}
      ariaLabel={ariaLabel}
      showTags={false}
      size="md"
      radius={6}
      menuWidth={112}
      placement="bottom"
      align="left"
      popDuration={180}
      glideDuration={220}
      rememberPosition
      accentColor="#f5f5f5"
      surfaceColor="#000000"
      highlightColor="#1e1e1e"
      textColor="#a3a3a3"
      optionClassName="cursor-target"
      optionCursorPadding={2}
    />
  );
}
