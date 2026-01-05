import { Card } from "./ui/card";
import {
  Pin,
  MessageSquare,
  History,
  BarChart3,
  Search
} from "lucide-react";

export function FeaturesDetailSection() {
  const features = [];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">

          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Card 
                  key={index}
                  className="p-6 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg mb-3 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">
                      {feature.description}
                    </p>
                    {feature.badge && (
                      <span className="inline-flex text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
