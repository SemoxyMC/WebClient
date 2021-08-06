import React from "react";

interface INavIconProps {
    selected?: boolean,
    className?: string
}

export const DashboardIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M11.5547 2.71875H3.85156C3.22593 2.71875 2.71875 3.22593 2.71875 3.85156V11.5547C2.71875 12.1803 3.22593 12.6875 3.85156 12.6875H11.5547C12.1803 12.6875 12.6875 12.1803 12.6875 11.5547V3.85156C12.6875 3.22593 12.1803 2.71875 11.5547 2.71875Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.1484 2.71875H17.4453C16.8197 2.71875 16.3125 3.22593 16.3125 3.85156V11.5547C16.3125 12.1803 16.8197 12.6875 17.4453 12.6875H25.1484C25.7741 12.6875 26.2812 12.1803 26.2812 11.5547V3.85156C26.2812 3.22593 25.7741 2.71875 25.1484 2.71875Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5547 16.3125H3.85156C3.22593 16.3125 2.71875 16.8197 2.71875 17.4453V25.1484C2.71875 25.7741 3.22593 26.2812 3.85156 26.2812H11.5547C12.1803 26.2812 12.6875 25.7741 12.6875 25.1484V17.4453C12.6875 16.8197 12.1803 16.3125 11.5547 16.3125Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.1484 16.3125H17.4453C16.8197 16.3125 16.3125 16.8197 16.3125 17.4453V25.1484C16.3125 25.7741 16.8197 26.2812 17.4453 26.2812H25.1484C25.7741 26.2812 26.2812 25.7741 26.2812 25.1484V17.4453C26.2812 16.8197 25.7741 16.3125 25.1484 16.3125Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

export const OverviewIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1" fill="white">
            <rect x="1.1196" y="1" width="27" height="13" rx="2"/>
        </mask>
        <rect x="1.1196" y="1" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-1-inside-1)"/>
        <line x1="5.6196" y1="7.5" x2="16.6196" y2="7.5" stroke={fill} strokeLinecap="round"/>
        <circle cx="21.6196" cy="7.5" r="1.5" fill={fill}/>
        <mask id="path-4-inside-2" fill="white">
            <rect x="1.1196" y="15" width="27" height="13" rx="2"/>
        </mask>
        <rect x="1.1196" y="15" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-4-inside-2)"/>
        <line x1="5.6196" y1="21.5" x2="16.6196" y2="21.5" stroke={fill} strokeLinecap="round"/>
        <circle cx="21.6196" cy="21.5" r="1.5" fill={fill}/>
    </svg>
}

export const PlayerIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.8892 9.51562C22.7232 11.8192 21.0143 13.5938 19.1509 13.5938C17.2874 13.5938 15.5757 11.8198 15.4126 9.51562C15.2427 7.11916 16.9062 5.4375 19.1509 5.4375C21.3955 5.4375 23.0591 7.16277 22.8892 9.51562Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.1508 17.2188C15.4596 17.2188 11.9099 19.0522 11.0206 22.6228C10.9028 23.0952 11.1991 23.5625 11.6845 23.5625H26.6178C27.1032 23.5625 27.3977 23.0952 27.2816 22.6228C26.3923 18.995 22.8427 17.2188 19.1508 17.2188Z" stroke={fill} strokeWidth="3" strokeMiterlimit="10"/>
        <path d="M11.4477 10.5318C11.3152 12.3714 9.93427 13.8203 8.44576 13.8203C6.95724 13.8203 5.57408 12.372 5.44381 10.5318C5.30844 8.61787 6.65252 7.25 8.44576 7.25C10.239 7.25 11.5831 8.65299 11.4477 10.5318Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.7876 17.332C10.7652 16.8636 9.63919 16.6835 8.44577 16.6835C5.50046 16.6835 2.66277 18.1476 1.95193 20.9995C1.85847 21.3767 2.09523 21.75 2.48265 21.75H8.84226" stroke={fill} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
}

export const ConsoleIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.1196 9L12.1196 15L5.1196 21M12.1196 22.5H24.1196" stroke={fill} strokeWidth="3"/>
    </svg>
}

export const BackupIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.71875 19.0312V24.4688C3.72084 25.1892 4.00795 25.8795 4.51736 26.3889C5.02678 26.8983 5.71709 27.1854 6.4375 27.1875H24.5625C25.2829 27.1854 25.9732 26.8983 26.4826 26.3889C26.992 25.8795 27.2792 25.1892 27.2812 24.4688V19.0312" stroke={fill} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M11.875 19.0312C11.875 19.9927 12.2569 20.9147 12.9367 21.5945C13.6166 22.2743 14.5386 22.6562 15.5 22.6562C16.4614 22.6562 17.3834 22.2743 18.0633 21.5945C18.7431 20.9147 19.125 19.9927 19.125 19.0312M3.71875 19.0312H11.875H3.71875ZM19.125 19.0312H27.2812H19.125Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.75 1.8125H8.25C6.77734 1.8125 5.81445 2.60547 5.53125 4.07812L3.71875 10.875V16.3125C3.72084 17.0329 4.00795 17.7232 4.51736 18.2326C5.02678 18.742 5.71709 19.0292 6.4375 19.0312H24.5625C25.2829 19.0292 25.9732 18.742 26.4826 18.2326C26.992 17.7232 27.2792 17.0329 27.2812 16.3125V10.875L25.4688 4.07812C25.1855 2.54883 24.166 1.8125 22.75 1.8125Z" stroke={fill} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M11.875 10.875C11.875 11.8364 12.2569 12.7584 12.9367 13.4383C13.6166 14.1181 14.5386 14.5 15.5 14.5C16.4614 14.5 17.3834 14.1181 18.0633 13.4383C18.7431 12.7584 19.125 11.8364 19.125 10.875M3.71875 10.875H11.875H3.71875ZM19.125 10.875H27.2812H19.125Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

export const SettingsIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8563 10.8926C15.1125 10.8191 14.3642 10.9773 13.7139 11.3456C13.0635 11.7138 12.5429 12.2741 12.2232 12.9497C11.9036 13.6253 11.8006 14.3831 11.9283 15.1195C12.0561 15.8559 12.4083 16.5348 12.9367 17.0633C13.4652 17.5917 14.1441 17.944 14.8805 18.0717C15.6169 18.1994 16.3748 18.0964 17.0503 17.7768C17.7259 17.4571 18.2862 16.9365 18.6544 16.2861C19.0227 15.6358 19.1809 14.8875 19.1075 14.1437C19.0237 13.31 18.6543 12.5308 18.0617 11.9383C17.4692 11.3457 16.69 10.9763 15.8563 10.8926V10.8926ZM24.5846 14.5C24.5823 14.894 24.5533 15.2874 24.4979 15.6776L27.0587 17.686C27.1702 17.7785 27.2453 17.9074 27.2707 18.05C27.2961 18.1926 27.2702 18.3396 27.1974 18.4648L24.7749 22.6562C24.7013 22.7803 24.5863 22.8744 24.4502 22.922C24.314 22.9695 24.1655 22.9675 24.0307 22.9162L21.4875 21.8922C21.3472 21.8363 21.1953 21.8162 21.0454 21.8335C20.8954 21.8508 20.7521 21.905 20.6283 21.9913C20.2401 22.2586 19.8323 22.496 19.4082 22.7016C19.2749 22.7664 19.1596 22.863 19.0725 22.9829C18.9853 23.1028 18.9291 23.2424 18.9086 23.3892L18.5275 26.1017C18.5024 26.245 18.4284 26.3751 18.3181 26.4698C18.2077 26.5645 18.0679 26.618 17.9225 26.6211H13.0775C12.9345 26.6186 12.7966 26.5675 12.6865 26.4762C12.5765 26.3849 12.5008 26.2588 12.472 26.1187L12.0914 23.4101C12.07 23.2617 12.0123 23.1208 11.9234 23.0001C11.8344 22.8793 11.717 22.7824 11.5816 22.718C11.1581 22.5135 10.7516 22.2755 10.3661 22.006C10.2427 21.9201 10.0998 21.8663 9.95043 21.8494C9.80102 21.8325 9.64976 21.853 9.51027 21.9092L6.96767 22.9327C6.83293 22.984 6.6844 22.9861 6.54825 22.9386C6.4121 22.8912 6.29707 22.7972 6.22341 22.6732L3.80089 18.4818C3.72806 18.3566 3.70203 18.2096 3.72744 18.067C3.75286 17.9244 3.82806 17.7954 3.93966 17.703L6.1039 16.0038C6.22247 15.9097 6.31565 15.7874 6.375 15.6482C6.43435 15.5089 6.45798 15.357 6.44374 15.2063C6.42335 14.9701 6.41089 14.7345 6.41089 14.4983C6.41089 14.2621 6.42279 14.0299 6.44374 13.7988C6.45642 13.649 6.43163 13.4984 6.37162 13.3606C6.3116 13.2227 6.21823 13.102 6.09993 13.0092L3.93683 11.31C3.82704 11.2172 3.75342 11.0886 3.72888 10.947C3.70433 10.8053 3.73043 10.6595 3.80259 10.5352L6.22511 6.34375C6.29868 6.2197 6.41367 6.1256 6.54983 6.07804C6.68599 6.03048 6.83456 6.03251 6.96937 6.08377L9.51253 7.10783C9.65278 7.16367 9.80468 7.18385 9.95464 7.16655C10.1046 7.14925 10.2479 7.09502 10.3718 7.00871C10.7599 6.74144 11.1677 6.504 11.5918 6.29844C11.7251 6.23364 11.8404 6.13701 11.9276 6.01709C12.0147 5.89717 12.071 5.75764 12.0914 5.61082L12.4726 2.8983C12.4976 2.75505 12.5716 2.62493 12.682 2.5302C12.7923 2.43546 12.9321 2.38198 13.0775 2.37891H17.9225C18.0655 2.38138 18.2034 2.43249 18.3135 2.52381C18.4235 2.61514 18.4992 2.74123 18.528 2.88131L18.9086 5.58986C18.93 5.7383 18.9877 5.87915 19.0767 5.99991C19.1656 6.12066 19.283 6.21756 19.4184 6.28201C19.842 6.48646 20.2484 6.72455 20.6339 6.99398C20.7573 7.07986 20.9002 7.13368 21.0496 7.15058C21.199 7.16749 21.3503 7.14696 21.4898 7.09084L24.0324 6.06734C24.1671 6.01603 24.3156 6.01392 24.4518 6.06137C24.5879 6.10883 24.703 6.20281 24.7766 6.32676L27.1991 10.5182C27.272 10.6434 27.298 10.7904 27.2726 10.933C27.2472 11.0756 27.172 11.2046 27.0604 11.297L24.8961 12.9962C24.777 13.09 24.6833 13.2121 24.6235 13.3514C24.5636 13.4907 24.5395 13.6427 24.5534 13.7937C24.5721 14.0282 24.5846 14.2638 24.5846 14.5Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export const AddonIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.0527 7.25H11.4785C9.69546 7.25 8.25 8.69546 8.25 10.4785V23.0527C8.25 24.8358 9.69546 26.2812 11.4785 26.2812H24.0527C25.8358 26.2812 27.2812 24.8358 27.2812 23.0527V10.4785C27.2812 8.69546 25.8358 7.25 24.0527 7.25Z" stroke={fill} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M17.7656 12.2344V21.2969M22.2969 16.7656H13.2344M8.25 11V21.75H6.89062C6.05013 21.7476 5.24474 21.4127 4.65041 20.8183C4.05609 20.224 3.72114 19.4186 3.71875 18.5781V6.34375C3.72159 5.38321 4.10442 4.46283 4.78362 3.78362C5.46283 3.10442 6.38321 2.72159 7.34375 2.71875H19.5781C20.4186 2.72114 21.224 3.05609 21.8183 3.65041C22.4127 4.24474 22.7476 5.05013 22.75 5.89062L22.7217 7.25H12" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export const WorldIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8.07419V21.0806L15.5 26.5M4 8.07419L15.5 2.5L27 8.07419M4 8.07419L15.5 13.3387M15.5 26.5L27 21.0806V8.07419M15.5 26.5V13.3387M27 8.07419L15.5 13.3387" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export const DSMIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <mask id="path-1-inside-1" fill="white">
                <rect x="2" y="1" width="27" height="13" rx="2"/>
            </mask>
            <rect x="2" y="1" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-1-inside-1)"/>
            <line x1="6.5" y1="7.5" x2="17.5" y2="7.5" stroke={fill} strokeLinecap="round"/>
            <circle cx="22.5" cy="7.5" r="1.5" fill={fill}/>
            <mask id="path-4-inside-2" fill="white">
                <rect x="2" y="15" width="27" height="13" rx="2"/>
            </mask>
            <rect x="2" y="15" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-4-inside-2)"/>
            <line x1="6.5" y1="21.5" x2="17.5" y2="21.5" stroke={fill} strokeLinecap="round"/>
            <circle cx="22.5" cy="21.5" r="1.5" fill={fill}/>
            <path d="M17.5766 17.6156C17.2266 17.9442 16.9569 18.3236 16.7757 18.7274C16.4997 19.3425 16.4314 20.0061 16.5688 20.6439C16.7067 21.2839 17.0532 21.9014 17.5995 22.4056C18.148 22.9119 18.8701 23.2765 19.6834 23.4258C20.4972 23.5752 21.3388 23.4971 22.0946 23.2081C22.8494 22.9196 23.463 22.4428 23.8794 21.8675C24.2937 21.2953 24.5 20.6456 24.5 20C24.5 18.6193 25.6193 17.5 27 17.5C28.3807 17.5 29.5 18.6193 29.5 20C29.5 21.7279 28.9438 23.3983 27.9297 24.7993C26.9176 26.1975 25.5008 27.2588 23.8803 27.8784C22.2606 28.4977 20.4884 28.6572 18.7804 28.3436C17.0721 28.0299 15.4778 27.2516 14.2081 26.0796C12.9364 24.9058 12.0447 23.3851 11.681 21.6972C11.3168 20.0072 11.506 18.258 12.2139 16.6804C12.9204 15.1059 14.1018 13.7929 15.5764 12.8834C16.2355 12.4768 16.9425 12.1573 17.678 11.9281C17.3187 11.0279 17.5034 9.96106 18.2322 9.23223C19.2086 8.25592 20.7915 8.25592 21.7678 9.23223L24.7678 12.2322C24.8907 12.3551 24.9987 12.4884 25.0913 12.6296C25.3419 12.9168 25.5776 13.3131 25.6781 13.8317C25.8976 14.9635 25.3154 15.7553 25.085 16.0203C24.8249 16.3193 24.5546 16.493 24.4432 16.5614C24.3715 16.6054 24.3081 16.64 24.2588 16.6655L24.2588 16.6655C24.2336 16.6785 24.2105 16.69 24.19 16.6999L24.1846 16.7025L24.1846 16.7025L24.1663 16.7112L24.1582 16.7151L24.1581 16.715L24.1499 16.7189L24.1463 16.7205L24.1463 16.7205L24.1424 16.7223L24.1402 16.7233L17.5766 17.6156ZM17.5766 17.6156C17.6834 18.0378 17.902 18.4375 18.2322 18.7678C19.2086 19.7441 20.7915 19.7441 21.7678 18.7678L23.6455 16.8901C23.8112 16.8529 23.9752 16.7984 24.1348 16.7258C24.1354 16.7255 24.136 16.7252 24.1366 16.725L17.5766 17.6156Z" fill={fill} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="29" height="29" fill="white" transform="translate(0.880402)"/>
            </clipPath>
        </defs>
    </svg>
}

export const NewServerIcon: React.FC<INavIconProps> = ({selected, className}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <mask id="path-1-inside-1" fill="white">
                <rect x="2" y="1" width="27" height="13" rx="2"/>
            </mask>
            <rect x="2" y="1" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-1-inside-1)"/>
            <line x1="6.5" y1="7.5" x2="17.5" y2="7.5" stroke={fill} strokeLinecap="round"/>
            <circle cx="22.5" cy="7.5" r="1.5" fill={fill}/>
            <mask id="path-4-inside-2" fill="white">
                <rect x="2" y="15" width="27" height="13" rx="2"/>
            </mask>
            <rect x="2" y="15" width="27" height="13" rx="2" stroke={fill} strokeWidth="6" mask="url(#path-4-inside-2)"/>
            <line x1="6.5" y1="21.5" x2="17.5" y2="21.5" stroke={fill} strokeLinecap="round"/>
            <circle cx="22.5" cy="21.5" r="1.5" fill={fill}/>
            <path d="M19.7692 12.5H19.2692V13V18.2692H14H13.5V18.7692V22.2308V22.7308H14H19.2692V28V28.5H19.7692H23.2308H23.7308V28V22.7308H29H29.5V22.2308V18.7692V18.2692H29H23.7308V13V12.5H23.2308H19.7692Z" fill={fill} stroke="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="29" height="29" fill="white" transform="translate(0.880402)"/>
            </clipPath>
        </defs>
    </svg>
}

export const UserIcon: React.FC<INavIconProps> = ({className, selected}) => {
    const fill = selected ? "var(--semoxy-blue)" : "var(--text)"

    return <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4844 8.15625C20.2624 11.1508 17.9922 13.5938 15.5 13.5938C13.0078 13.5938 10.7337 11.1514 10.5156 8.15625C10.2891 5.04102 12.498 2.71875 15.5 2.71875C18.502 2.71875 20.711 5.09766 20.4844 8.15625Z" stroke={fill} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5 17.2188C10.5723 17.2188 5.5709 19.9375 4.64539 25.0691C4.53381 25.6877 4.88385 26.2812 5.53125 26.2812H25.4688C26.1167 26.2812 26.4668 25.6877 26.3552 25.0691C25.4291 19.9375 20.4277 17.2188 15.5 17.2188Z" stroke={fill} strokeWidth="3" strokeMiterlimit="10"/>
    </svg>
}