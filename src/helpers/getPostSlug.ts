const slugify = (title: string) => {
  const slug = title.toLowerCase();
  const slugRegex = /[^a-z0-9]/g;

  return slug.replace(slugRegex, '-');
};

export { slugify };
