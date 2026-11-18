import { useState } from "react";
const emptyFormData = {
  studentName: '',
  studentEmail: '',
  topic: 'React',
  rating: 0,
  feedback: '',
};
const Form = () => {
const[formData,setFormData]=useState(emptyFormData);
const[feedbacks,setFeedbacks]=useState([]);
const onChangeHandler=(e)=>{
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
     })
     }
const submitHandler=(e)=>{
    e.preventDefault();
if(formData.rating===0){
    alert('Please choose a rating.');
    return;
}
if(formData.feedback.trim().length<5){
    alert('Feedback must be at least 5 characters.');
    return;
}
setFeedbacks([...feedbacks, { ...formData, id: Date.now() }]);
setFormData(emptyFormData);
}
  return (
    <div className="bg-white rounded-xl p-6 shadow-xl max-w-xl mx-auto">
    <form onSubmit={submitHandler}>
    <h1 className="text-2xl font-bold text-center mb-6">Feedback Form</h1>
    <div className="mb-4">
    <label>Student Name</label>
    <input
    type="text"
    name="studentName"
    required
    value={formData.studentName}
    onChange={onChangeHandler}
    className="w-full border rounded-lg p-2"/>
    </div>
    <div className="mb-4">
    <label>Student Email</label>
    <input
    type="email"
    name="studentEmail"
    required
    value={formData.studentEmail}
    onChange={onChangeHandler}
    className="w-full border rounded-lg p-2"/>
    </div>
    <div className="mb-4">
    <label>Topic</label>
    <select
    name="topic"
    value={formData.topic}
    onChange={onChangeHandler}
    className="w-full border rounded-lg p-2">
    <option value="React">React</option>
    <option value="JavaScript">JavaScript</option>
    <option value="HTML/CSS">HTML/CSS</option>
    </select>
    </div>
    <div className="mb-4">
    <label className="block mb-2">Rating</label>
    <div className="flex gap-2">
    {[1, 2, 3, 4, 5].map((num) => (
    <button
    key={num}
    type="button"
    onClick={() => setFormData({ ...formData, rating: num })}
    className={`w-10 h-10 border rounded-lg ${num <= formData.rating
    ? 'bg-orange-500 text-white border-orange-500'
    : 'border-gray-300 text-gray-700 hover:border-orange-500'
    }`}>
    {num}
    </button>
    ))}
    </div>
    </div>
    <div className="mb-4">
    <label className="block mb-2">Your Feedback</label>
    <textarea
    name="feedback"
    required
    rows={4}
    value={formData.feedback}
    onChange={onChangeHandler}
    className="w-full border rounded-lg p-2"/>
    </div>
    <button
    type="submit"
    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
    >
    Submit
    </button>
    </form>
    <div className="mt-6 space-y-4">
    {feedbacks.map((item) => (
    <div
    key={item.id}
    className="bg-gray-50 p-4 rounded-lg shadow">
    <div className="flex items-center gap-2">
    <h2 className="font-bold text-gray-800">{item.studentName}</h2>
    <span className="text-sm text-gray-500">{item.studentEmail}</span>
    </div>
    <p className="text-gray-700 mt-2">{item.topic} — Rating: {item.rating}/5</p>
    <p className="text-gray-600 mt-2">{item.feedback}</p>
    </div>
    ))}
    </div>
    </div>
     )
}

export default Form
