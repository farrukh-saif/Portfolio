import React from "react";
import {
	AboutSection,
	HeroSection,
	InterestsSection,
	Page,
	ProjectsSection,
	Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
	return (
		<>
			<Seo title="Gatsby Starter for Portfolio Minimal" />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />
				<AboutSection sectionId="about" heading="About Me" />
				<InterestsSection sectionId="details" heading="Details" />
				<ProjectsSection sectionId="projects" heading="Projects" />
			</Page>
		</>
	);
}
