
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import LayersIcon from "@mui/icons-material/Layers";

const items = [
  { title: "Components", desc: "Tools based to scheme money drop effectively.", icon: <CodeIcon /> },
  { title: "Performance", desc: "Build up flexible use for long-term management.", icon: <SpeedIcon /> },
  { title: "Customization", desc: "Noitfy status and up-coming retributions.", icon: <LayersIcon /> },
];

export default function Showcase() {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>Core concepts</Typography>
      <div className="docs-grid">
        {items.map((it) => (
          <Card key={it.title} sx={{ borderRadius: 2, minHeight: 140, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                {it.icon} {it.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">{it.desc}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Explore</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
