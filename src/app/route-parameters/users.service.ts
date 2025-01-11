import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    { id: '1', name: "Alice Johnson", profession: "Software Engineer", city: "New York", salary: 85000 },
    { id: '2', name: "Bob Smith", profession: "Data Analyst", city: "Chicago", salary: 72000 },
    { id: '3', name: "Charlie Brown", profession: "Graphic Designer", city: "Los Angeles", salary: 68000 },
    { id: '4', name: "Diana Prince", profession: "Project Manager", city: "San Francisco", salary: 95000 },
    { id: '5', name: "Evan Taylor", profession: "Web Developer", city: "Seattle", salary: 80000 },
    { id: '6', name: "Fiona Davis", profession: "Marketing Specialist", city: "Boston", salary: 60000 },
    { id: '7', name: "George Miller", profession: "UX Designer", city: "Austin", salary: 75000 },
    { id: '8', name: "Hannah Wilson", profession: "Product Manager", city: "Denver", salary: 90000 },
    { id: '9', name: "Ian Clark", profession: "DevOps Engineer", city: "Atlanta", salary: 87000 },
    { id: '10', name: "Jenny Adams", profession: "Cybersecurity Analyst", city: "Washington, D.C.", salary: 88000 },
  ];

  constructor(private https: HttpClient) { }
}
