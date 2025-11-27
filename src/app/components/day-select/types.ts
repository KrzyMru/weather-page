import type { ListboxProps } from "@headlessui/react";

interface DaySelectProps extends ListboxProps {
    days: string[],
    loading?: boolean,
}

export type { DaySelectProps }