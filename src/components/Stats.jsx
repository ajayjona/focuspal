// src/components/Stats.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const FOCUS_SESSION_MINUTES = 25;
const BREAK_SESSION_MINUTES = 5;

const Stats = () => {
  const [focusSessions, setFocusSessions] = useState(0);
  const [breakSessions, setBreakSessions] = useState(0);

  useEffect(() => {
    const focusCount = JSON.parse(localStorage.getItem("focusSessions")) || 0;
    const breakCount = JSON.parse(localStorage.getItem("breakSessions")) || 0;
    setFocusSessions(focusCount);
    setBreakSessions(breakCount);
  }, []);

  const totalSessions = focusSessions + breakSessions;
  const totalFocusMinutes = focusSessions * FOCUS_SESSION_MINUTES;
  const totalBreakMinutes = breakSessions * BREAK_SESSION_MINUTES;

  const focusPercent = totalSessions
    ? Math.round((focusSessions / totalSessions) * 100)
    : 0;

  return (
    <Card className="w-full mt-6">
      <CardContent className="py-6 space-y-6">
        <h2 className="text-xl font-semibold text-center">📊 Your Stats</h2>

        <div className="flex flex-col gap-3">
          <StatItem label="🎯 Focus Sessions" value={focusSessions} />
          <StatItem label="☕ Break Sessions" value={breakSessions} />
          <StatItem label="⏱️ Focus Time (mins)" value={totalFocusMinutes} />
          <StatItem label="💤 Break Time (mins)" value={totalBreakMinutes} />
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Focus vs Break Ratio
          </p>
          <Progress value={focusPercent} />
          <p className="text-xs mt-1 text-center">{focusPercent}% Focus</p>
        </div>
      </CardContent>
    </Card>
  );
};

const StatItem = ({ label, value }) => (
  <div className="flex justify-between border-b pb-1 text-sm">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Stats;
