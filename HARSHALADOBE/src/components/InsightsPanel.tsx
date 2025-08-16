import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface InsightsPanelProps {
  documentIds?: string[];
  documentId?: string;
  persona?: string;
  jobToBeDone?: string;
  currentText?: string;
  currentPage?: number;
  insightMode?: boolean;
  onPageNavigate?: (page: number) => void;
}

export function InsightsPanel({ documentIds = [], documentId, persona: propPersona, jobToBeDone: propJobToBeDone, currentText, currentPage, insightMode, onPageNavigate }: InsightsPanelProps) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <div className="p-6 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
            <h3 className="font-bold text-foreground text-xl">Insights</h3>
              <p className="text-sm text-muted-foreground">
              AI-powered document analysis
                                        </p>
                                      </div>
                                    </div>
                                  </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-fit mx-auto">
                  <Brain className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
              Insights Section
                  </h4>
            <p className="text-sm text-gray-600">
              This section is currently empty
                  </p>
                </div>
                </div>
        </div>
    </div>
  );
}