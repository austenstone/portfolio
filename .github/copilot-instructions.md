# Austen Stone's Portfolio Website

This is my personal website that acts as my portfolio, blog, and has documentation for my projects.
This is built using [docusaurus](https://docusaurus.io/docs/) and is hosted on GitHub Pages. It's Typescript and React based.

# Categories of pages that are in md or mdx format:

## Blog
- Blog posts are in the `blog` directory.

## Documentation
- Documentation pages are in the `docs` directory.

## Projects
- Project pages are in the `projects` directory.

I need links to my socials:
- [GitHub](https://github.com/austenstone)
- [LinkedIn](https://www.linkedin.com/in/austenstone/)

# Structure of project:
- `/portfolio`: This is the new docusaurus project where you will be working and writing code.
- `/old`: This is the old Angular project that needs to be migrated from.

# Migration from Old Angular Site

The old site (`/old`) is an Angular 17 application that contains the following content and functionality that needs to be migrated:

## Content to Migrate:

### About Section:
- Personal introduction: "Hey👋, I'm Austen. I write code and solve people's business problems."
- Portrait image from GitHub avatar: https://avatars.githubusercontent.com/u/22425467?v=4
- Social links (GitHub, LinkedIn)
- Contact email: hi@austen.info

### Main Projects:
1. **GitHub Actions** - GitHub Actions marketplace presence with 50+ published actions
   - Link: https://github.com/marketplace?query=austenstone
   - Screenshot: `old/src/assets/screenshots/chrome_nSvEKPj2YO.png`

2. **deviceWISE View** - No-code dashboard builder (generated $1M+ revenue)
   - Demo: https://view.devicewise.com/login?user=demo&pass=demo
   - Docs: https://docs.devicewise.com/Content/Products/GatewayDevelopersGuide/deviceWISE_View/deviceWISE-View.htm
   - Video: https://youtu.be/Gh3EXo6ZuYE
   - Screenshot: `old/src/assets/screenshots/chrome_EWhfXl9Ecn.png`

3. **GitHub Actions Usage Report Viewer** - Client-side GitHub usage visualization
   - Live: https://austenstone.github.io/github-actions-usage-report/
   - Source: https://github.com/austenstone/github-actions-usage-report
   - Video: https://youtu.be/VSrB4Qhqgs8
   - Screenshot: `old/src/assets/screenshots/chrome_xebwmFt39a.png`

4. **GitHub Value** - Measures GitHub adoption and impact
   - Demo: https://oauth.gvm-chart.com/copilot
   - Source: https://github.com/austenstone/github-value
   - Screenshot: GitHub user assets link

### Other Projects:
- **The Game of Life**: https://life.austen.info (source: https://github.com/austenstone/game-of-life)
- **Spotify Share**: https://spotify-share.austen.info (source: https://github.com/austenstone/spotify-share)
- **Audi Car Search**: https://github.com/austenstone/audi-car-search (reverse engineered Audi website)
- **React Chat**: https://chat.austen.info (source: https://github.com/austenstone/react-chat)

### Resume/Experience Data:
**Current Info:**
- Name: Austen Stone
- Title: Software Engineer  
- Description: "Passionate developer focused on using cutting edge technology to solve business problems."

**Skills:**
C, C++, Typescript, JavaScript, Angular, React, PWAs, Node, Git, Bash, Docker, Electron, Continuous integration, SCM, Object Oriented Design, Deployment

**Work Experience:**
- **Senior Solutions Engineer @ GitHub** (Mar 2024 - Present)
- **Solutions Engineer @ GitHub** (Jan 2021 - Mar 2024)
  - Creator of GitHub Usage Report Viewer
  - GitHub Actions SME, ran roundtables for 100+ attendees
  - FY23 Revenue Club Winner & Managers Choice award
- **Solutions Expert @ Telit** (Dec 2020 - Jan 2021)
- **Solutions Engineer @ Telit** (Apr 2018 - Dec 2020)
- **Engineer Intern @ Telit** (Oct 2016 - Apr 2018)
- **Owner @ Austen Stone Tech** (Jan 2013 - Jan 2019)
- **IT & Computer Graphics Specialist @ JRPR Public Relations** (Aug 2013 - Dec 2016)

**Education:**
- Florida Atlantic University - Bachelors of Science in Computer Engineering

### Assets to Migrate:
- Profile image: `old/src/assets/img/me.jpg`
- Project screenshots: `old/src/assets/screenshots/`
- Icons and logos: `old/src/assets/icons/`, `old/src/assets/img/`

### Interactive Features:
- Weather widget (shows local FL weather with personality)
- GitHub corner component
- Typed.js header animation
- Special button components with icons
- Responsive design
- Dark/light theme support

### Special Elements:
- GitHub sponsors iframe
- Strava cycling link
- PassMark computer benchmark badge
- Animated GitHub corner octopus
