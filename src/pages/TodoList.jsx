import React, { useState } from 'react';
import { FaSkull, FaTrash } from 'react-icons/fa'; // Ikony związane z Wiedźminem

function TodoList() {
  const [quests, setQuests] = useState([]);
  const [newQuest, setNewQuest] = useState({ title: '', type: 'main', dueDate: '', completed: false });

  const addQuest = () => {
    if (newQuest.title.trim() === '') {
      return; // Nie dodawaj pustych zadań
    }
    setQuests([...quests, newQuest]);
    setNewQuest({ title: '', type: 'main', dueDate: '', completed: false });
  };

  const toggleQuest = (index) => {
    const newQuests = [...quests];
    newQuests[index].completed = !newQuests[index].completed;
    setQuests(newQuests);
  };

  const removeQuest = (index) => {
    const newQuests = [...quests];
    newQuests.splice(index, 1);
    setQuests(newQuests);
  };

  return (
    <div className='questbook w-full h-screen bg-gray-900 p-8 overflow-auto'>
      <h1 className='text-3xl font-bold text-yellow-500 mb-4'>
        Witcher's Questbook
      </h1>
      <div className='flex mb-4'>
        <input
          type='text'
          className='w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500'
          placeholder='Quest Title'
          value={newQuest.title}
          onChange={(e) => setNewQuest({ ...newQuest, title: e.target.value })}
        />
        <select
          className='ml-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500'
          value={newQuest.type}
          onChange={(e) => setNewQuest({ ...newQuest, type: e.target.value })}
        >
          <option value='main'>Main Quest</option>
          <option value='side'>Side Quest</option>
          <option value='contract'>Contract</option>
          <option value='exploration'>Exploration</option>
        </select>
        <input
          type='date'
          className='ml-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500'
          value={newQuest.dueDate}
          onChange={(e) => setNewQuest({ ...newQuest, dueDate: e.target.value })}
        />
        <button
          className='ml-2 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-700'
          onClick={addQuest}
        >
          Add Quest
        </button>
      </div>
      <div className='quests-container'>
        <div className='quest-section'>
          <h2 className='text-xl font-bold text-white mb-2'>Main Quests</h2>
          <ul className='list-none'>
            {quests.map((quest, index) => {
              if (quest.type === 'main') {
                return (
                  <li
                    key={index}
                    className={`quest-entry py-2 px-4 rounded-md mb-2 shadow-md hover:bg-gray-800 ${
                      quest.completed ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className='flex justify-between items-center'>
                      <div>
                        <FaSkull className='mr-2' />
                        <span className='text-lg font-medium'>{quest.title}</span>
                      </div>
                      <div className='flex items-center'>
                        <span className='mr-2 text-lg font-medium'>{quest.type}</span>
                        <span className='mr-2 text-lg font-medium'>{quest.dueDate}</span>
                        <input
                          type='checkbox'
                          className='mr-2'
                          checked={quest.completed}
                          onChange={() => toggleQuest(index)}
                        />
                        <button
                          className='flex items-center text-red-500 hover:text-red-700'
                          onClick={() => removeQuest(index)}
                        >
                          <FaTrash className='mr-1' /> Abandon Quest
                        </button>
                      </div>
                    </div>
                    {quest.description && (
                      <p className='text-gray-300 mt-1'>{quest.description}</p>
                    )}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>

        <div className='quest-section'>
          <h2 className='text-xl font-bold text-white mb-2'>Side Quests</h2>
          <ul className='list-none'>
            {quests.map((quest, index) => {
              if (quest.type === 'side') {
                return (
                  <li
                    key={index}
                    className={`quest-entry py-2 px-4 rounded-md mb-2 shadow-md hover:bg-gray-800 ${
                      quest.completed ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className='flex justify-between items-center'>
                      <div>
                        <FaSkull className='mr-2' />
                        <span className='text-lg font-medium'>{quest.title}</span>
                      </div>
                      <div className='flex items-center'>
                        <span className='mr-2 text-lg font-medium'>{quest.type}</span>
                        <span className='mr-2 text-lg font-medium'>{quest.dueDate}</span>
                        <input
                          type='checkbox'
                          className='mr-2'
                          checked={quest.completed}
                          onChange={() => toggleQuest(index)}
                        />
                        <button
                          className='flex items-center text-red-500 hover:text-red-700'
                          onClick={() => removeQuest(index)}
                        >
                          <FaTrash className='mr-1' /> Abandon Quest
                        </button>
                      </div>
                    </div>
                    {quest.description && (
                      <p className='text-gray-300 mt-1'>{quest.description}</p>
                    )}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>

        <div className='quest-section'>
          <h2 className='text-xl font-bold text-white mb-2'>Contracts</h2>
          <ul className='list-none'>
            {quests.map((quest, index) => {
              if (quest.type === 'contract') {
                return (
                  <li
                    key={index}
                    className={`quest-entry py-2 px-4 rounded-md mb-2 shadow-md hover:bg-gray-800 ${
                      quest.completed ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className='flex justify-between items-center'>
                      <div>
                        <FaSkull className='mr-2' />
                        <span className='text-lg font-medium'>{quest.title}</span>
                      </div>
                      <div className='flex items-center'>
                        <span className='mr-2 text-lg font-medium'>{quest.type}</span>
                        <span className='mr-2 text-lg font-medium'>{quest.dueDate}</span>
                        <input
                          type='checkbox'
                          className='mr-2'
                          checked={quest.completed}
                          onChange={() => toggleQuest(index)}
                        />
                        <button
                          className='flex items-center text-red-500 hover:text-red-700'
                          onClick={() => removeQuest(index)}
                        >
                          <FaTrash className='mr-1' /> Abandon Quest
                        </button>
                      </div>
                    </div>
                    {quest.description && (
                      <p className='text-gray-300 mt-1'>{quest.description}</p>
                    )}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>

        <div className='quest-section'>
          <h2 className='text-xl font-bold text-white mb-2'>Explorations</h2>
          <ul className='list-none'>
            {quests.map((quest, index) => {
              if (quest.type === 'exploration') {
                return (
                  <li
                    key={index}
                    className={`quest-entry py-2 px-4 rounded-md mb-2 shadow-md hover:bg-gray-800 ${
                      quest.completed ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className='flex justify-between items-center'>
                      <div>
                        <FaSkull className='mr-2' />
                        <span className='text-lg font-medium'>{quest.title}</span>
                      </div>
                      <div className='flex items-center'>
                        <span className='mr-2 text-lg font-medium'>{quest.type}</span>
                        <span className='mr-2 text-lg font-medium'>{quest.dueDate}</span>
                        <input
                          type='checkbox'
                          className='mr-2'
                          checked={quest.completed}
                          onChange={() => toggleQuest(index)}
                        />
                        <button
                          className='flex items-center text-red-500 hover:text-red-700'
                          onClick={() => removeQuest(index)}
                        >
                          <FaTrash className='mr-1' /> Abandon Quest
                        </button>
                      </div>
                    </div>
                    {quest.description && (
                      <p className='text-gray-300 mt-1'>{quest.description}</p>
                    )}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
