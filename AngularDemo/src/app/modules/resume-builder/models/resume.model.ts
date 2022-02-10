export interface Resume {
    name: string;
    designation: string;
    email: string;
    phone: number;
    profile: string;
    skills: Skills[];
    technical: Technical[];
    experience: Experience[];
    education: Education[];
}

interface Skills {
    skill: string;
    description: string;
}

interface Technical {
    tech: string;
}

interface Experience {
    expname: string;
    year: number;
    post: string;
    desc: string;
}

interface Education {
    university: string;
    gpa: number;
}
