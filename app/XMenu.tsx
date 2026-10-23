"use client";

import type { ReactNode } from "react";
import GlideSelect from "./GlideSelect";

type Option = { label: string; href: string };

type Props = {
  options: Option[];
  trigger: ReactNode;
  ariaLabel: string;
};

export default function XMenu({ options, trigger, ariaLabel }: Props) {
  return (
    <GlideSelect
      options={options.map((o) => ({ value: o.href, label: o.label }))}
      triggerContent={trigger}
      hoverOpen
      onChange={(value) => window.open(value, "_blank", "noopener,noreferrer")}
      ariaLabel={ariaLabel}
      showTags={false}
      size="lg"
      radius={12}
      menuWidth={164}
      placement="bottom"
      align="left"
      popDuration={180}
      glideDuration={220}
      rememberPosition
      accentColor="#f5f5f5"
      surfaceColor="#0b0b0b"
      highlightColor="#1e1e1e"
      textColor="#a3a3a3"
    />
  );
}
