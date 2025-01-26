const baseWords = [
    "Tech",
    "Code",
    "Digital",
    "Cyber",
    "Innovate",
    "Data",
    "Cloud",
    "Web",
    "Mobile",
    "Security",
    "AI",
    "Machine",
    "Network",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Node",
    "Angular",
    "Swift",
    "Blockchain",
    "VR",
    "AR",
    "Quantum",
    "BigData",
    "Microservices",
    "Linux",
    "OpenSource",
    "Cryptography",
    "Automation",
];

const prefixes = [
    "Pro",
    "Tech",
    "Smart",
    "Soft",
    "Meta",
    "Hyper",
    "Ultra",
    "Super",
    "Mega",
    "Nano",
    "Micro",
    "Quick",
    "Agile",
    "Dynamic",
    "Agile",
    "Power",
    "Global",
    "Rapid",
    "Awesome",
    "Dynamic",
    "Infinite",
    "Extreme",
    "Epic",
    "Retro",
    "Future",
    "Swift",
    "Intelligent",
    "Cyber",
    "Robo",
    "Green",
];

const suffixes = [
    "Dev",
    "Engineer",
    "Wizard",
    "Master",
    "Techie",
    "Guru",
    "Champion",
    "Expert",
    "Ninja",
    "Sorcerer",
    "Architect",
    "Pioneer",
    "Innovator",
    "Maestro",
    "Savvy",
    "Enthusiast",
    "Challenger",
    "Specialist",
    "Maestro",
    "Genius",
    "Captain",
    "Hero",
    "Pioneer",
    "Legend",
    "Icon",
    "Savant",
    "Virtuoso",
    "Maestro",
    "Einstein",
    "Guru",
];

const useRandomTeamName = () => {
    const baseWord = baseWords[Math.floor(Math.random() * baseWords.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const affixType = Math.floor(Math.random() * 4) + 1;

    switch (affixType) {
        case 1:
            return `${prefix} ${baseWord}`;
        case 2:
            return `${baseWord} ${prefix}`;
        case 3:
            return `${baseWord} ${suffix}`;
        case 4:
            return `${prefix} ${baseWord} ${suffix}`;
        default:
            return baseWord;
    }
};

const useRandomString = (length) => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};

const useParam = (index) => {
    return location.pathname.split("/").filter((e) => e)[index];
};

const useRandomInt = () => {
    return Math.floor(Math.random() * 999999);
};

const useIsObjectEmpty = (object) => {
    for (const prop in object) {
        if (Object.hasOwn(object, prop)) {
            return false;
        }
    }

    return true;
};

const useTruncatedString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
};

export {
    useRandomString,
    useRandomTeamName,
    useParam,
    useRandomInt,
    useIsObjectEmpty,
    useTruncatedString,
};
