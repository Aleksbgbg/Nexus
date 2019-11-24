export interface Website {
  name: string;

  description: string;

  root: string;

  image: string;
};

class WebsiteImpl implements Website {
  name: string;
  description: string;
  root: string;
  image: string;

  constructor (name: string, subdomain: string, image: string, description: string) {
    this.name = name;
    this.description = description;
    this.root = `https://${subdomain}.iamaleks.dev`;
    this.image = this.root.concat(image);
  }
}

export const websites: Website[] = [
  new WebsiteImpl("Nexus", "nexus", "/favicon.png", "Has connections to all of my web applications. The page you're looking at right now."),
  new WebsiteImpl("Radio", "radio", "/icon/radio.png", "Allows multiple users in the same radio channel to listen to the same music and chat. Users can create their own radio channels from YouTube playlists. Radio channels rotate and shuffle their playlists 24/7."),
  new WebsiteImpl("Downloads", "downloads", "/favicon.png", "Contains download links to all of my released desktop applications."),
  new WebsiteImpl("API", "api", "/favicon.png", "API server for some of my desktop applications. The root page is documented so others can use my endpoints to extend or replace desktop clients.")
];