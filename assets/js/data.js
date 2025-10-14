function initializeData() {
    if (!localStorage.getItem('aapda_trainings')) {
        const sampleTrainings = [
            {
                id: 'TRN-001',
                name: 'Earthquake Response Training',
                theme: 'Earthquake Preparedness',
                state: 'Delhi',
                startDate: '2025-11-01',
                endDate: '2025-11-05',
                status: 'Upcoming',
                participants: 45,
                location: { lat: 28.6139, lng: 77.2090 }
            },
            {
                id: 'TRN-002',
                name: 'Flood Management Workshop',
                theme: 'Flood Management',
                state: 'Bihar',
                startDate: '2025-10-20',
                endDate: '2025-10-24',
                status: 'Completed',
                participants: 60,
                location: { lat: 25.0961, lng: 85.3131 }
            },
            {
                id: 'TRN-003',
                name: 'Cyclone Preparedness Training',
                theme: 'Cyclone Response',
                state: 'Odisha',
                startDate: '2025-10-15',
                endDate: '2025-10-18',
                status: 'Active',
                participants: 38,
                location: { lat: 20.9517, lng: 85.0985 }
            },
            {
                id: 'TRN-004',
                name: 'Urban Search & Rescue',
                theme: 'Urban Search and Rescue',
                state: 'Maharashtra',
                startDate: '2025-11-10',
                endDate: '2025-11-15',
                status: 'Upcoming',
                participants: 52,
                location: { lat: 19.0760, lng: 72.8777 }
            },
            {
                id: 'TRN-005',
                name: 'Fire Safety Training',
                theme: 'Fire Safety',
                state: 'Karnataka',
                startDate: '2025-10-25',
                endDate: '2025-10-28',
                status: 'Active',
                participants: 41,
                location: { lat: 12.9716, lng: 77.5946 }
            }
        ];
        localStorage.setItem('aapda_trainings', JSON.stringify(sampleTrainings));
    }

    if (!localStorage.getItem('aapda_participants')) {
        const sampleParticipants = [
            {
                id: 'PRT-001',
                name: 'Rajesh Kumar',
                state: 'Delhi',
                skill: 'First Responder',
                lastTraining: 'Earthquake Response Training',
                certificationStatus: 'Certified',
                phone: '+91-9876543210',
                email: 'rajesh.kumar@example.com'
            },
            {
                id: 'PRT-002',
                name: 'Priya Sharma',
                state: 'Maharashtra',
                skill: 'Medical Support',
                lastTraining: 'Urban Search & Rescue',
                certificationStatus: 'Certified',
                phone: '+91-9876543211',
                email: 'priya.sharma@example.com'
            },
            {
                id: 'PRT-003',
                name: 'Amit Patel',
                state: 'Gujarat',
                skill: 'Search and Rescue',
                lastTraining: 'Cyclone Preparedness Training',
                certificationStatus: 'Pending',
                phone: '+91-9876543212',
                email: 'amit.patel@example.com'
            },
            {
                id: 'PRT-004',
                name: 'Sunita Reddy',
                state: 'Telangana',
                skill: 'Emergency Communication',
                lastTraining: 'Flood Management Workshop',
                certificationStatus: 'Certified',
                phone: '+91-9876543213',
                email: 'sunita.reddy@example.com'
            },
            {
                id: 'PRT-005',
                name: 'Vikram Singh',
                state: 'Rajasthan',
                skill: 'Incident Command',
                lastTraining: 'Fire Safety Training',
                certificationStatus: 'Certified',
                phone: '+91-9876543214',
                email: 'vikram.singh@example.com'
            }
        ];
        localStorage.setItem('aapda_participants', JSON.stringify(sampleParticipants));
    }
}

function getTrainings() {
    const trainings = localStorage.getItem('aapda_trainings');
    return trainings ? JSON.parse(trainings) : [];
}

function saveTrainings(trainings) {
    localStorage.setItem('aapda_trainings', JSON.stringify(trainings));
}

function getParticipants() {
    const participants = localStorage.getItem('aapda_participants');
    return participants ? JSON.parse(participants) : [];
}

function saveParticipants(participants) {
    localStorage.setItem('aapda_participants', JSON.stringify(participants));
}

function addTraining(training) {
    const trainings = getTrainings();
    training.id = 'TRN-' + String(trainings.length + 1).padStart(3, '0');
    trainings.push(training);
    saveTrainings(trainings);
    return training;
}

function updateTraining(id, updatedTraining) {
    const trainings = getTrainings();
    const index = trainings.findIndex(t => t.id === id);
    if (index !== -1) {
        trainings[index] = { ...trainings[index], ...updatedTraining };
        saveTrainings(trainings);
        return trainings[index];
    }
    return null;
}

function deleteTraining(id) {
    const trainings = getTrainings();
    const filtered = trainings.filter(t => t.id !== id);
    saveTrainings(filtered);
}

function addParticipant(participant) {
    const participants = getParticipants();
    participant.id = 'PRT-' + String(participants.length + 1).padStart(3, '0');
    participants.push(participant);
    saveParticipants(participants);
    return participant;
}

function updateParticipant(id, updatedParticipant) {
    const participants = getParticipants();
    const index = participants.findIndex(p => p.id === id);
    if (index !== -1) {
        participants[index] = { ...participants[index], ...updatedParticipant };
        saveParticipants(participants);
        return participants[index];
    }
    return null;
}

function deleteParticipant(id) {
    const participants = getParticipants();
    const filtered = participants.filter(p => p.id !== id);
    saveParticipants(filtered);
}

initializeData();
