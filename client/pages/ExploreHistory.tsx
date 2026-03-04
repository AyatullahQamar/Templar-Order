import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

type Node = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  // ✅ optional: control crop focus per image
  focus?: "top" | "center" | "bottom";
};

function NodeCard({ node }: { node: Node }) {
  const focusClass =
    node.focus === "top"
      ? "object-top"
      : node.focus === "bottom"
      ? "object-bottom"
      : "object-center";

  return (
    <div className="glass-effect rounded-2xl overflow-hidden border border-red-800/20 bg-red-800/10">
      {/* ✅ Perfect image box: consistent ratio on all cards */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/20">
        <img
          src={node.image}
          alt={node.title}
          className={`absolute inset-0 w-full h-full object-cover ${focusClass}`}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/hierarchy/fallback.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/10 to-transparent opacity-90" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-serif font-bold text-red-800">{node.title}</h3>
        <p className="text-white/70 text-sm mt-1">{node.subtitle}</p>
        <p className="text-white/80 mt-3 leading-relaxed">{node.desc}</p>
      </div>
    </div>
  );
}

export default function ExploreHistory() {
  const data = useMemo(() => {
    const top: Node = {
      id: "gm",
      title: "Grand Master",
      subtitle: "Supreme authority of the Order",
      desc: "Leads the Order’s vision, alliances, and strategic direction. Appoints senior officers and represents the Order to kingdoms and councils.",
      image: "/hierarchy/grandmaster.jpg",
      focus: "top",
    };

    const council: Node[] = [
      {
        id: "seneschal",
        title: "Seneschal",
        subtitle: "Second-in-command • Governance",
        desc: "Oversees administration, discipline, and internal operations. Keeps the Order running with strict structure.",
        // ✅ IMPORTANT: keep filename lowercase if your file is lowercase
        image: "/hierarchy/Seneschal.jpg",
        focus: "top",
      },
      {
        id: "marshal",
        title: "Marshal",
        subtitle: "Military command • Training",
        desc: "Controls battlefield readiness, arms, tactics, and training. Directs military structure beneath leadership.",
        image: "/hierarchy/marshel.jpg",
        focus: "center",
      },
      {
        id: "chaplain",
        title: "Chaplains",
        subtitle: "Spiritual guardians • Doctrine",
        desc: "Protect the Order’s spiritual discipline, rites, and moral code. Guides vows and sacred rituals.",
        image: "/hierarchy/chaplain.jpg",
        focus: "center",
      },
    ];

    const commanders: Node[] = [
      {
        id: "commander1",
        title: "Regional Commander",
        subtitle: "Fortresses • Routes • Logistics",
        desc: "Leads a region’s holdings, fortifications, and mission security. Ensures supplies and discipline remain strong.",
        image: "/hierarchy/Regional Commander.jpg",
        focus: "center",
      },
      {
        id: "commander2",
        title: "Chapter Commander",
        subtitle: "Local chapters • Recruitment",
        desc: "Manages local chapter operations, initiations, and readiness. Coordinates knights and sergeants.",
        image: "/hierarchy/ChapterCommander.jpg",
        focus: "top",
      },
      {
        id: "commander3",
        title: "Quartermaster",
        subtitle: "Supplies • Armory • Provisions",
        desc: "Maintains equipment, resources, and inventory. Ensures every mission is supported properly.",
        image: "/hierarchy/Quartermaster.jpg",
        focus: "top",
      },
    ];

    const ranks: Node[] = [
      {
        id: "knights",
        title: "Knights",
        subtitle: "Elite sworn warriors",
        desc: "Frontline protectors of the mission — trained, disciplined, and bound by oath.",
        image: "/hierarchy/Knights.jpg",

        focus: "center",
      },
      {
        id: "sergeants",
        title: "Sergeants",
        subtitle: "Skilled soldiers & specialists",
        desc: "Support operations, fortresses, and missions — reliable, tactical, and essential.",
        image: "/hierarchy/Sergeants.jpg",
        focus: "top",
      },
      {
        id: "initiates",
        title: "Initiates & Squires",
        subtitle: "Training path to the mantle",
        desc: "Serve the Order, learn discipline, and rise through loyalty and merit.",
        image: "/hierarchy/Initiates.jpg",
        focus: "top",
      },
    ];

    return { top, council, commanders, ranks };
  }, []);

  return (
    <div className="min-h-screen bg-stone pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* header */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-800 hover:text-red-700 transition font-serif font-bold"
          >
            <ChevronLeft size={18} />
            Back to Home
          </Link>
          <span className="text-white/60 text-sm font-serif">
            Hierarchy Diagram • Templar Order
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-red-800">
          Hierarchy of the Order
        </h1>
        <p className="text-white/70 mt-3 max-w-3xl leading-relaxed">
          A structured chain of command — leadership, council, commanders, and ranks.
          Each node below contains an image and description.
        </p>

        {/* MOBILE */}
        <div className="mt-10 space-y-6 lg:hidden">
          <NodeCard node={data.top} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.council.map((n) => (
              <NodeCard key={n.id} node={n} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.commanders.map((n) => (
              <NodeCard key={n.id} node={n} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.ranks.map((n) => (
              <NodeCard key={n.id} node={n} />
            ))}
          </div>
        </div>

        {/* DESKTOP (diagram with lines) */}
        <div className="mt-12 hidden lg:block">
          <div className="relative glass-effect rounded-3xl border border-red-800/20 bg-red-800/10 p-10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(127,29,29,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(127,29,29,0.2) 0%, transparent 50%)",
              }}
            />

            {/* TOP NODE */}
            <div className="relative z-10 flex justify-center">
              <div className="w-[420px]">
                <NodeCard node={data.top} />
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <div className="w-px h-10 bg-red-800/40" />
            </div>

            {/* Council row */}
            <div className="relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] h-px bg-red-800/35" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] flex justify-between">
                <div className="w-px h-5 bg-red-800/35" />
                <div className="w-px h-5 bg-red-800/35" />
                <div className="w-px h-5 bg-red-800/35" />
              </div>

              <div className="grid grid-cols-3 gap-8">
                {data.council.map((n) => (
                  <NodeCard key={n.id} node={n} />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <div className="w-px h-10 bg-red-800/35" />
            </div>

            {/* Commanders row */}
            <div className="relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] h-px bg-red-800/30" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] flex justify-between">
                <div className="w-px h-5 bg-red-800/30" />
                <div className="w-px h-5 bg-red-800/30" />
                <div className="w-px h-5 bg-red-800/30" />
              </div>

              <div className="grid grid-cols-3 gap-8">
                {data.commanders.map((n) => (
                  <NodeCard key={n.id} node={n} />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <div className="w-px h-10 bg-red-800/25" />
            </div>

            {/* Ranks row */}
            <div className="relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] h-px bg-red-800/25" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[920px] flex justify-between">
                <div className="w-px h-5 bg-red-800/25" />
                <div className="w-px h-5 bg-red-800/25" />
                <div className="w-px h-5 bg-red-800/25" />
              </div>

              <div className="grid grid-cols-3 gap-8">
                {data.ranks.map((n) => (
                  <NodeCard key={n.id} node={n} />
                ))}
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}