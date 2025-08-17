function Form() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f9fbff]">
            <div className="bg-white rounded-3xl shadow-md border border-[#e6edff] p-8 max-w-md w-full relative">
                <h2 className="text-center text-xl font-bold text-[#0b1a33] mb-6">
                    Book A FREE Trial Now!
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Ph. Number
                        </label>
                        <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Stage
                        </label>
                        <select
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select stage</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Message
                        </label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#0b1a33] text-white px-6 py-3 rounded-full hover:bg-[#122544] transition"
                    >
                        <span className="bg-white text-[#0b1a33] w-7 h-7 flex items-center justify-center rounded-full">
                            →
                        </span>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;  