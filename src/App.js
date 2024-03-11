import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { Routes, Route } from 'react-router-dom'
import TodoList from './pages/TodoList'
import Witch from './pages/Witch'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Hero/>}/>
				<Route path='/Dziennik Zadań' element={<TodoList/>}/>
				<Route path='/Wiedźma' element={<Witch/>} />
				<Route/>
			</Routes>
			
		</div>
	)
}

export default App
