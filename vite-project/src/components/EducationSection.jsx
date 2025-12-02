import { GraduationCap, MapPin } from "lucide-react";

const education = [
    {
        id: 1,
        degree: "MASTER OF SCIENCE - COMPUTER SCIENCE",
        school: "Epitech, Lyon",
        period: "2025 - 2028",
        details: "Focus on Full Stack technologies and IT project management."
    },
    {
        id: 2,
        degree: "MBA COMMUNICATION & EVENT MANAGEMENT",
        school: "EFAP, Lyon",
        period: "2020 - 2023",
        details: "Acquisition of skills in project management, team coordination, and strategic analysis."
    },
    {
        id: 3,
        degree: "LICENCE INFORMATION-COMMUNICATION",
        school: "Université Lumière Lyon 2 & Chung-Ang University (Seoul)",
        period: "2016 - 2019",
        details: "Program including a year abroad in South Korea."
    }
];

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    My <span className="text-primary"> Education </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((item) => (
                        <div 
                            key={item.id} 
                            className="group bg-card rounded-lg p-6 shadow-xl card-hover transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                                <h3 className="text-xl font-semibold leading-tight">
                                    {item.degree}
                                </h3>
                            </div>
                            
                            <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                {item.school}
                            </p>
                            
                            <span className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1 font-medium block w-fit mb-4">
                                {item.period}
                            </span>

                            <p className="text-sm text-muted-foreground">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>            
        </section>
    );
};