export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in seconds. No credit card required, just your email.",
    },
    {
      number: "02",
      title: "Customize",
      description:
        "Choose from beautiful templates or start from scratch. Add your projects and experience.",
    },
    {
      number: "03",
      title: "Publish",
      description:
        "Deploy your portfolio instantly. Get a custom domain or use your own.",
    },
    {
      number: "04",
      title: "Share",
      description:
        "Share your portfolio with the world. Track views and get noticed by recruiters.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building your perfect portfolio is as simple as 1, 2, 3, 4. Follow
            these easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
