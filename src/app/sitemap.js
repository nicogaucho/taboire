export default function sitemap() {
  const baseURL = "https://taboire.es";

  const staticRoutes = ["/", "/about", "/contact", "/process", "/work"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes];
};

