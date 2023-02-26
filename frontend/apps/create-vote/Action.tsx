import React, { memo } from "react";
import { IconType } from "react-icons";

type Props = {
    title: string;
    Icon: IconType;
    description: string;
};

const styles = {
    container: `mr-[20px]`,
    title: `text-[#06246B] text-[10px] mb-[10px]`,
    wrapper: `px-[10px]`,
    icon: ``,
    description: ``,
};

const Action = function ({ title, Icon, description }: Props) {
    return (
        <div className="mr-[120px]">
            <h3>{title}</h3>
            <section className="cursor-pointer rounded-[5px] border-[1px] border-solid border-[#00a88e] flex min-h-[63px] items-center box-border px-[20px]">
                <div className="">
                    <Icon />
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    );
};

export default memo(Action);
