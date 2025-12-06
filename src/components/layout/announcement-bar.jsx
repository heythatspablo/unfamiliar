const AnnouncementBar = () => {
  return (
    <aside role="banner" className="mb-0 py-3 bg-lime-500 text-center">
      <span className="font-medium">New:</span> AI-powered liveness detection now available.{' '}
      <a href="/products/face-match" className="underline hover:no-underline">Learn more →</a>
    </aside>
  );
};

export default AnnouncementBar;