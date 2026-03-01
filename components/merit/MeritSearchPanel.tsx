"use client";
import { useState } from "react";
import {
  MeritListConfig,
  MeritEntry,
  getMeritEntries,
  STATUS_CONFIG,
} from "@/data/meritLists";

export default function MeritSearchPanel({ config }: { config: MeritListConfig }) {
  const [query, setQuery] = useState("");
  const [selectedListId, setSelectedListId] = useState<number | undefined>(
    config.lists?.find((l) => l.isLatest)?.id
  );
  const [results, setResults] = useState<MeritEntry[] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    const entries = getMeritEntries(config.slug, query, selectedListId);
    setResults(entries);
    setSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setQuery("");
    setResults(null);
    setSearched(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* Header */}
      <div style={{
        background: "rgba(52,211,153,0.04)",
        border: "1px solid rgba(52,211,153,0.12)",
        borderRadius: "20px",
        padding: "1.75rem 2rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "180px", height: "180px",
          background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{
            width: "52px", height: "52px",
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.6rem",
          }}>{config.logo}</div>

          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.2)",
              borderRadius: "20px", padding: "0.15rem 0.65rem",
              marginBottom: "0.3rem",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399", display: "inline-block" }} />
              <span style={{ color: "#34D399", fontSize: "0.65rem", fontFamily: "var(--font-body)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Live Merit List
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "1.4rem", color: "#F1F5F9",
              letterSpacing: "-0.02em", margin: 0,
            }}>
              {config.shortName} Merit List {new Date().getFullYear()}
            </h2>
          </div>

          {/* Stats */}
          <div style={{ marginLeft: "auto", display: "flex", gap: "1.5rem" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "#34D399" }}>
                {config.totalEntries?.toLocaleString()}
              </div>
              <div style={{ fontSize: "0.68rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Total Entries
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "#94A3B8" }}>
                {config.lists?.length ?? 0}
              </div>
              <div style={{ fontSize: "0.68rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Merit Lists
              </div>
            </div>
          </div>
        </div>

        {/* Merit list selector */}
        {config.lists && config.lists.length > 1 && (
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            {config.lists.map((list) => (
              <button key={list.id} onClick={() => setSelectedListId(list.id)} style={{
                padding: "0.4rem 0.9rem",
                borderRadius: "8px",
                border: `1px solid ${selectedListId === list.id ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.08)"}`,
                background: selectedListId === list.id ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
                color: selectedListId === list.id ? "#34D399" : "#64748B",
                fontFamily: "var(--font-body)", fontWeight: selectedListId === list.id ? 600 : 400,
                fontSize: "0.8rem", cursor: "pointer", transition: "all 0.2s",
              }}>
                {list.name}
                {list.isLatest && (
                  <span style={{
                    marginLeft: "0.4rem",
                    background: "rgba(52,211,153,0.15)",
                    color: "#34D399", fontSize: "0.6rem",
                    borderRadius: "4px", padding: "0.05rem 0.3rem",
                    fontWeight: 700,
                  }}>NEW</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Search bar */}
        <div style={{
          display: "flex", gap: "0.75rem",
          alignItems: "center",
        }}>
          <div style={{
            flex: 1, display: "flex", alignItems: "center", gap: "0.75rem",
            background: "rgba(255,255,255,0.05)",
            border: "1.5px solid rgba(52,211,153,0.25)",
            borderRadius: "14px", padding: "0.75rem 1.25rem",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
            onFocus={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.5)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(52,211,153,0.08)";
            }}
            onBlur={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <svg style={{ width: "18px", color: "#34D399", flexShrink: 0 }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your name, father's name, or roll number..."
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                color: "#F1F5F9", fontSize: "0.95rem",
                fontFamily: "var(--font-body)", caretColor: "#34D399",
              }}
            />
            {query && (
              <button onClick={handleClear} style={{
                background: "none", border: "none",
                color: "#475569", cursor: "pointer",
                fontSize: "1.1rem", lineHeight: 1, padding: 0,
                flexShrink: 0,
              }}>×</button>
            )}
          </div>

          <button
            onClick={handleSearch}
            disabled={!query.trim()}
            style={{
              background: query.trim()
                ? "linear-gradient(135deg, #34D399, #059669)"
                : "rgba(255,255,255,0.06)",
              color: query.trim() ? "#060A16" : "#334155",
              border: "none", borderRadius: "12px",
              padding: "0.8rem 1.75rem",
              fontWeight: 700, fontSize: "0.9rem",
              fontFamily: "var(--font-body)",
              cursor: query.trim() ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              boxShadow: query.trim() ? "0 8px 20px rgba(52,211,153,0.2)" : "none",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              if (query.trim()) (e.currentTarget as HTMLElement).style.opacity = "0.88";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            Search
          </button>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "#475569", fontFamily: "var(--font-body)" }}>
          Search by full name, father's name, or roll number · Last updated {config.lastUpdated}
        </div>
      </div>

      {/* Results */}
      {searched && results !== null && (
        <div>
          {/* Results header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "1rem",
          }}>
            <div style={{ fontSize: "0.85rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
              {results.length === 0
                ? "No results found"
                : <><span style={{ color: "#94A3B8", fontWeight: 600 }}>{results.length}</span> result{results.length !== 1 ? "s" : ""} for <span style={{ color: "#F1F5F9", fontWeight: 600 }}>"{query}"</ span></>
              }
            </div>
            <button onClick={handleClear} style={{
              background: "none", border: "none",
              color: "#475569", fontSize: "0.78rem",
              fontFamily: "var(--font-body)", cursor: "pointer",
              fontWeight: 600,
            }}>
              Clear search
            </button>
          </div>

          {/* No results */}
          {results.length === 0 && (
            <div style={{
              textAlign: "center", padding: "4rem 2rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "1.15rem", color: "#F1F5F9", marginBottom: "0.5rem",
              }}>
                No results found
              </h3>
              <p style={{
                color: "#64748B", fontFamily: "var(--font-body)",
                fontSize: "0.875rem", lineHeight: 1.65, maxWidth: "400px", margin: "0 auto",
              }}>
                We couldn't find <strong style={{ color: "#94A3B8" }}>"{query}"</strong> in the {config.shortName} merit list.
                Try searching with your full name as it appears on your matric certificate, or try your roll number.
              </p>
            </div>
          )}

          {/* Results table */}
          {results.length > 0 && (
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px", overflow: "hidden",
            }}>
              {/* Table header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1fr 1.5fr 100px 120px",
                padding: "0.75rem 1.25rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}>
                {["Name", "Father's Name", "Roll No.", "Program", "Aggregate", "Status"].map(h => (
                  <div key={h} style={{
                    fontSize: "0.65rem", color: "#475569",
                    fontFamily: "var(--font-body)", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>{h}</div>
                ))}
              </div>

              {results.map((entry, i) => {
                const statusCfg = STATUS_CONFIG[entry.status];
                return (
                  <div key={entry.id} style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.5fr 1fr 1.5fr 100px 120px",
                    padding: "1rem 1.25rem",
                    borderBottom: i < results.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: entry.status === "selected" ? "rgba(52,211,153,0.02)" : "transparent",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = entry.status === "selected" ? "rgba(52,211,153,0.02)" : "transparent"}
                  >
                    {/* Name + rank */}
                    <div>
                      <div style={{
                        fontFamily: "var(--font-body)", fontWeight: 600,
                        fontSize: "0.9rem", color: "#F1F5F9",
                        marginBottom: "0.15rem",
                      }}>
                        {entry.candidateName}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-body)" }}>
                        Rank #{entry.rank}
                      </div>
                    </div>

                    {/* Father name */}
                    <div style={{
                      fontSize: "0.85rem", color: "#94A3B8",
                      fontFamily: "var(--font-body)",
                      alignSelf: "center",
                    }}>
                      {entry.fatherName}
                    </div>

                    {/* Roll number */}
                    <div style={{
                      fontSize: "0.78rem", color: "#64748B",
                      fontFamily: "var(--font-body)", fontWeight: 500,
                      alignSelf: "center",
                    }}>
                      {entry.rollNumber}
                    </div>

                    {/* Program */}
                    <div style={{
                      fontSize: "0.82rem", color: "#94A3B8",
                      fontFamily: "var(--font-body)",
                      alignSelf: "center",
                    }}>
                      {entry.program}
                    </div>

                    {/* Aggregate */}
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: "1rem", color: "#34D399",
                      alignSelf: "center",
                    }}>
                      {entry.aggregate}%
                    </div>

                    {/* Status */}
                    <div style={{ alignSelf: "center" }}>
                      <span style={{
                        background: statusCfg.bg,
                        border: `1px solid ${statusCfg.border}`,
                        borderRadius: "20px", padding: "0.25rem 0.65rem",
                        fontSize: "0.72rem", fontWeight: 700,
                        color: statusCfg.color,
                        fontFamily: "var(--font-body)",
                        whiteSpace: "nowrap",
                      }}>
                        {statusCfg.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Pre-search empty state */}
      {!searched && (
        <div style={{
          textAlign: "center", padding: "4rem 2rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.07)",
          borderRadius: "16px",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔎</div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.1rem", color: "#94A3B8", marginBottom: "0.4rem",
          }}>
            Enter your details above to search
          </h3>
          <p style={{
            color: "#475569", fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
          }}>
            Search by name, father's name, or roll number
          </p>
        </div>
      )}
    </div>
  );
}
