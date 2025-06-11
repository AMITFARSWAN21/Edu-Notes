import React, { useState } from "react"

// Enhanced Card Components with better styling
const Card = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm text-slate-900 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${className}`}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-2 p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-xl font-bold leading-tight tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-300 ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-2 ${className}`} {...props}>
    {children}
  </div>
)

export const TopPerformer = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const features = [
    {
      icon: "📤",
      title: "Easy Note Uploads",
      subtitle: "For Teachers",
      description: "Seamlessly upload and organize your teaching materials with our intuitive drag-and-drop interface.",
      color: "from-emerald-400 to-teal-500",
      accent: "emerald"
    },
    {
      icon: "⚡",
      title: "Instant Downloads",
      subtitle: "For Students", 
      description: "Access and download study materials instantly with our lightning-fast one-click system.",
      color: "from-blue-400 to-indigo-500",
      accent: "blue"
    },
    {
      icon: "🔍",
      title: "Smart Search",
      subtitle: "Find Anything",
      description: "Powerful search engine that finds notes by subject, semester, teacher, or even content keywords.",
      color: "from-purple-400 to-pink-500",
      accent: "purple"
    },
    {
      icon: "📊",
      title: "Deep Analytics",
      subtitle: "Track Performance",
      description: "Comprehensive insights into note performance, user engagement, and learning patterns.",
      color: "from-orange-400 to-red-500",
      accent: "orange"
    },
  ]

  const getAccentClasses = (accent, isHovered) => {
    const baseClasses = {
      emerald: isHovered ? "border-emerald-200 bg-emerald-50/50" : "",
      blue: isHovered ? "border-blue-200 bg-blue-50/50" : "",
      purple: isHovered ? "border-purple-200 bg-purple-50/50" : "",
      orange: isHovered ? "border-orange-200 bg-orange-50/50" : ""
    }
    return baseClasses[accent] || ""
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              📚 Why Choose EduNotes?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing how educators share knowledge and students access learning materials
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden cursor-pointer ${getAccentClasses(feature.accent, hoveredCard === index)}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}></div>
              
              {/* Icon background circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    feature.accent === 'blue' ? 'bg-blue-100 text-blue-700' :
                    feature.accent === 'purple' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  } group-hover:shadow-md transition-shadow duration-300`}>
                    {feature.subtitle}
                  </div>
                </div>
                <CardTitle>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className={`${
                    feature.accent === 'emerald' ? 'text-emerald-600' :
                    feature.accent === 'blue' ? 'text-blue-600' :
                    feature.accent === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    Learn more
                  </span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60">
            <div className="text-2xl">🚀</div>
            <div>
              <h3 className="font-bold text-slate-800">Ready to get started?</h3>
              <p className="text-slate-600 text-sm">Join thousands of educators and students already using EduNotes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}