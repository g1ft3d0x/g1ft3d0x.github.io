"use client";

export function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="font-code text-xs text-text-muted block mb-2"># name</label>
        <input
          type="text"
          placeholder="handle / name"
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-code text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label className="font-code text-xs text-text-muted block mb-2"># email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-code text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label className="font-code text-xs text-text-muted block mb-2"># message</label>
        <textarea
          rows={5}
          placeholder="your message here..."
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-code text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 border border-primary text-primary font-mono-display text-sm tracking-widest uppercase hover:bg-primary hover:text-base transition-all duration-200 shadow-glow hover:shadow-glow-lg rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}
