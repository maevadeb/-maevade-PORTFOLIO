import { Briefcase, Code, User } from "lucide-react";
export const AboutMe = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Cross-Functional Project Strategist</h3>
                    
                    <p className="text-muted-foreground">
                       With extensive experience in project management and coordination, 
                       I leverage my organizational skills and communication abilities to ensure a successful transition to IT. 
                    </p>
                    <p className="text-muted-foreground">
                        I channel my creativity through travel vlogs, reading, and video editing. 
                        These passions strengthen my attention to detail and ability to structure projects.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a 
                            href="/public/CV_Maevadeb.pdf"
                            download="CV_Maevadeb.pdf" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full br-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Agile & PM Toolkit</h4>
                                <p className="text-muted-foreground">
                                    Project planning and budget structuring. Trello and Notion for daily tracking. 
                                    Dashboard creation for operational steering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full br-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Soft skills</h4>
                                <p className="text-muted-foreground">
                                    Proven coordination rigor and organization. Cross-functional team communication. 
                                    Strong analysis and adaptability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full br-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>                        
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Vision & Delivery</h4>
                                <p className="text-muted-foreground">
                                        Structuring product vision from needs. Driving teams toward clear and efficient delivery. 
                                        Risk management and decision-making processes.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    );
};