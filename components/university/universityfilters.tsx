"use client";
import { cities, allTags } from "@/data/universities";

export type FilterState = {
  search: string;
  city: string;
  type: string;
  tag: string;
  admissionOpen: boolean;
  acceptsALevels: boolean;
  sortBy: string;
};

type Props = {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
};

const labelStyle = {
  fontSize: "0.7rem",
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  color: "#475569",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  marginBottom: "0.5rem",
  display: "block",
};

const selectStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  padding: "0.6rem 0.85rem",
  fontSize: "0.875rem",
  color: "#94A3B8",
  fontFamily: "var(--font-body)",
  outline: "none",
  cursor: "pointer",
  appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 0.75rem center",
  backgroundSize: "16px",
  paddingRight: "2.5rem",
};

const toggleStyle = (active: boolean) => ({
  width: "100%",
  background: active ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
  border: `1px solid ${active ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.07)"}`,
  borderRadius: "10px",
  padding: "0.6rem 0.85rem",
  fontSize: "0.875rem",
  color: active ? "#34D399" : "#64748B",
  fontFamily: "var(--font-body)",
  fontWeight: active ? 600 : 400,
  cursor: "pointer",
  textAlign: "left" as const,
  transition: "all 0.2s",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export default function UniversityFilters({ filters, onChange, totalResults }: Props) {
  const update = (key: keyof FilterState, value: string | boolean) =>
    onChange({ ...filters, [key]: value });

  const clearAll = () =>
    onChange({
      search: "",
      city: "",
      type: "",
      tag: "",
      admissionOpen: false,
      acceptsALevels: false,
      sortBy: "ranking",
    });

  const hasActiveFilters =
    filters.city || filters.type || filters.tag ||
    filters.admissionOpen || filters.acceptsALevels;

  return (
    <aside style={{
      width: "260px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      position: "sticky",
      top: "88px",
      alignSelf: "flex-start",
    }}>
      {/* Results count + clear */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800, fontSize: "1rem",
          color: "#F1F5F9",
        }}>
          {totalResults} <span style={{ color: "#64748B", fontWeight: 600 }}>universities</span>
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            style={{
              background: "none", border: "none",
              color: "#34D399", fontSize: "0.78rem",
              fontFamily: "var(--font-body)", cursor: "pointer",
              fontWeight: 600, padding: 0,
            }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Sort by */}
      <div>
        <label style={labelStyle}>Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => update("sortBy", e.target.value)}
          style={selectStyle}
        >
          <option value="ranking">Ranking</option>
          <option value="merit-high">Highest Merit</option>
          <option value="merit-low">Lowest Merit</option>
          <option value="fee-low">Lowest Fee</option>
          <option value="fee-high">Highest Fee</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>

      {/* City */}
      <div>
        <label style={labelStyle}>City</label>
        <select
          value={filters.city}
          onChange={(e) => update("city", e.target.value)}
          style={selectStyle}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Type */}
      <div>
        <label style={labelStyle}>University Type</label>
        <select
          value={filters.type}
          onChange={(e) => update("type", e.target.value)}
          style={selectStyle}
        >
          <option value="">Public & Private</option>
          <option value="public">Public Only</option>
          <option value="private">Private Only</option>
        </select>
      </div>

      {/* Field / Tag */}
      <div>
        <label style={labelStyle}>Field of Study</label>
        <select
          value={filters.tag}
          onChange={(e) => update("tag", e.target.value)}
          style={selectStyle}
        >
          <option value="">All Fields</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* Toggle filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label style={labelStyle}>Quick Filters</label>
        <button
          onClick={() => update("admissionOpen", !filters.admissionOpen)}
          style={toggleStyle(filters.admissionOpen)}
        >
          <span style={{ fontSize: "0.8rem" }}>●</span>
          Admissions Open
        </button>
        <button
          onClick={() => update("acceptsALevels", !filters.acceptsALevels)}
          style={toggleStyle(filters.acceptsALevels)}
        >
          <span>✓</span>
          Accepts A-Levels
        </button>
      </div>
    </aside>
  );
}