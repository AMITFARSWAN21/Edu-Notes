import React, { useState } from "react"

// Local Card Component Definitions
const Card = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${className}`}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-2 p-4 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-lg font-bold leading-tight tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-300 ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
)

export const TopPerformer = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {
      icon: "✅",
      title: "Easy Note Uploads",
      subtitle: "(Teachers)",
      description: "Teachers can upload notes quickly and easily.",
      accent: "emerald"
    },
    {
      icon: "📥",
      title: "One-click Downloads",
      subtitle: "(Students)",
      description: "Students can download notes instantly with one click.",
      accent: "blue"
    },
    {
      icon: "🔍",
      title: "Search Notes Easily",
      subtitle: "",
      description: "Search by subject, semester, or teacher.",
      accent: "purple"
    },
    {
      icon: "📈",
      title: "Analytics",
      subtitle: "",
      description: "Track views and downloads to analyze performance.",
      accent: "orange"
    },
  ]

  const getAccentClasses = (accent, isHovered) => {
    const baseClasses = {
      emerald: isHovered ? "border-emerald-200 bg-emerald-50" : "",
      blue: isHovered ? "border-blue-200 bg-blue-50" : "",
      purple: isHovered ? "border-purple-200 bg-purple-50" : "",
      orange: isHovered ? "border-orange-200 bg-orange-50" : ""
    }
    return baseClasses[accent] || ""
  }

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">📚 Why Use EduNotes?</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden cursor-pointer ${getAccentClasses(feature.accent, hoveredCard === index)}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                {feature.subtitle && (
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    feature.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    feature.accent === 'blue' ? 'bg-blue-100 text-blue-700' :
                    feature.accent === 'purple' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  } group-hover:shadow-md transition-shadow duration-300`}>
                    {feature.subtitle}
                  </div>
                )}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}