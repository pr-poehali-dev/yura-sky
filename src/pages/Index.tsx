const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-sky-200 overflow-hidden">
      <style>{`
        @keyframes sway {
          0%   { transform: rotate(-6deg); }
          50%  { transform: rotate(6deg); }
          100% { transform: rotate(-6deg); }
        }
        .house-sway {
          animation: sway 2s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      <div className="house-sway" style={{ width: "280px" }}>
        <img
          src="https://cdn.poehali.dev/projects/2be379a8-e082-4c0f-bf71-086a561e8d8a/bucket/ee8b9ac1-9b8e-4295-914e-e3cd8ffc80a2.jpg"
          alt="house"
          style={{ width: "100%", borderRadius: "16px" }}
        />
      </div>
    </div>
  );
};

export default Index;
