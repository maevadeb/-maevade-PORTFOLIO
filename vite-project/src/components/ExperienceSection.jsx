import { Briefcase, User } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "PROJECT COORDINATOR",
        company: "Hôtel Aston La Scala, Nice",
        period: "2024 - 2025",
        icon: "Briefcase",
        description: [
            "Analysis of customer needs and transformation into an operational action plan.",
            "Structuring and monitoring schedules, budgets, and resources.",
            "Creation of management dashboards.",
            "Coordination of multidisciplinary teams and operational risk management."
        ]
    },
    {
        id: 2,
        title: "EVENT PROJECT MANAGER",
        company: "Domaine Santa Maria, Villefranque",
        period: "2022 - 2023",
        icon: "Briefcase",
        description: [
            "Project management with requirements definition and prioritization.",
            "Implementation of monitoring processes.",
            "Stakeholder management and negotiation."
        ]
    },
    {
        id: 3,
        title: "PRESIDENTE - ASSOCIATION",
        company: "Association STK, Lyon",
        period: "Volunteer",
        icon: "User",
        description: [
            "Team management and meeting facilitation.",
            "Implementation of visual monitoring tools.",
            "Event coordination."
        ]
    }
];

const IconMap = {
    Briefcase: Briefcase,
    User: User
};

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    My <span className="text-primary"> Experience </span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const IconComponent = IconMap[exp.icon];

                        return (
                            <div 
                                key={exp.id} 
                                className="group bg-card rounded-lg p-6 shadow-xs card-hover transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start flex-wrap">
                                            <h3 className="text-xl font-semibold mb-1">
                                                {exp.title}
                                            </h3>
                                            <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mt-1 md:mt-0">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground mb-4 italic">
                                            {exp.company}
                                        </p>
                                        
                                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                                            {exp.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>            
        </section>
    );
};
