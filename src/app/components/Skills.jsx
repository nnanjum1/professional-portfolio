export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold title mb-6">Skills</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-300">
          <li className="p-4 bg-white/5 border soft-border rounded-lg">Frontend Development</li>
          <li className="p-4 bg-white/5 border soft-border rounded-lg">Backend APIs</li>
          <li className="p-4 bg-white/5 border soft-border rounded-lg">Database Design</li>
          <li className="p-4 bg-white/5 border soft-border rounded-lg">Problem Solving</li>
          <li className="p-4 bg-white/5 border soft-border rounded-lg">UI/UX Basics</li>
          <li className="p-4 bg-white/5 border soft-border rounded-lg">Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}
