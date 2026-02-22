// Configuration avec les données Deezer de l'album Discovery
const ALBUM_DATA = {
    id: 302127,
    title: "Discovery",
    artist: "Daft Punk",
    cover: "https://cdn-images.dzcdn.net/images/cover/5718f7c81c27e0b2417e2a4c45224f8a/500x500-000000-80-0-0.jpg",
    cover_small: "https://cdn-images.dzcdn.net/images/cover/5718f7c81c27e0b2417e2a4c45224f8a/56x56-000000-80-0-0.jpg",
    cover_medium: "https://cdn-images.dzcdn.net/images/cover/5718f7c81c27e0b2417e2a4c45224f8a/250x250-000000-80-0-0.jpg",
    cover_big: "https://cdn-images.dzcdn.net/images/cover/5718f7c81c27e0b2417e2a4c45224f8a/500x500-000000-80-0-0.jpg",
    cover_xl: "https://cdn-images.dzcdn.net/images/cover/5718f7c81c27e0b2417e2a4c45224f8a/1000x1000-000000-80-0-0.jpg",
    fans: 326507,
    duration: 3662,
    release_date: "2001-03-07",
    label: "Daft Life Ltd./ADA France",
    genre: "Danse",
    upc: "724384960650",
    nb_tracks: 14,
    tracks: [
        {
            id: 3135553,
            title: "One More Time",
            title_short: "One More Time",
            duration: 320,
            rank: 895695,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/f/8/c/0/f8c5dc3837912dba37c9a1ab3170cc3f.mp3?hdnea=exp=1771766144~acl=/api/1/1/f/8/c/0/f8c5dc3837912dba37c9a1ab3170cc3f.mp3*~data=user_id=0,application_id=42~hmac=789b58eb1c8c6be4b381393cafea3eaacb8ef4b68f9508bc9e39f3ebb316ef12",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 1
        },
        {
            id: 3135554,
            title: "Aerodynamic",
            title_short: "Aerodynamic",
            duration: 212,
            rank: 737732,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/6/9/9/0/699d41611cf0280f0a55c8ba4a372c14.mp3?hdnea=exp=1771766144~acl=/api/1/1/6/9/9/0/699d41611cf0280f0a55c8ba4a372c14.mp3*~data=user_id=0,application_id=42~hmac=313870a6f3748a8f2affa9fb82db58adf1921f18e0443784e0026890ed43b359",
            explicit: false,
            explicit_content_lyrics: 6,
            track_number: 2
        },
        {
            id: 3135555,
            title: "Digital Love",
            title_short: "Digital Love",
            duration: 301,
            rank: 738308,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/1/e/c/0/1ec8ff31f93acc81ebb93a45c191e219.mp3?hdnea=exp=1771766144~acl=/api/1/1/1/e/c/0/1ec8ff31f93acc81ebb93a45c191e219.mp3*~data=user_id=0,application_id=42~hmac=66f7dc5fb7374edb75295a2fdd086d614130040a669c4043a5cd808aca867d62",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 3
        },
        {
            id: 3135556,
            title: "Harder, Better, Faster, Stronger",
            title_short: "Harder, Better, Faster, Stronger",
            duration: 226,
            rank: 814839,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/6/a/2/0/6a2c0a5670afe821e08fc5154909534a.mp3?hdnea=exp=1771766144~acl=/api/1/1/6/a/2/0/6a2c0a5670afe821e08fc5154909534a.mp3*~data=user_id=0,application_id=42~hmac=b17da5c82af08c7bbd94be6ae867e76e50ccb4a26d8e27ca9af2695b7be6eb91",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 4
        },
        {
            id: 3135557,
            title: "Crescendolls",
            title_short: "Crescendolls",
            duration: 211,
            rank: 599484,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/1/f/6/0/1f65f58dc3cfa276ac6a1ee6f2ffac20.mp3?hdnea=exp=1771766144~acl=/api/1/1/1/f/6/0/1f65f58dc3cfa276ac6a1ee6f2ffac20.mp3*~data=user_id=0,application_id=42~hmac=7a25cf2d98a5097dbc247a3b2b3e70612a39dbf372d0a596dcee17f7fb00bc99",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 5
        },
        {
            id: 3135558,
            title: "Nightvision",
            title_short: "Nightvision",
            duration: 104,
            rank: 564752,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/c/0/6/0/c063dbb3b8f2af8dac3e88950f2e38b0.mp3?hdnea=exp=1771766144~acl=/api/1/1/c/0/6/0/c063dbb3b8f2af8dac3e88950f2e38b0.mp3*~data=user_id=0,application_id=42~hmac=ae3d4be8617da7a725958f6de15483f050ed31a2feb98e9ad66f4bbd9a2ece4e",
            explicit: false,
            explicit_content_lyrics: 6,
            track_number: 6
        },
        {
            id: 3135559,
            title: "Superheroes",
            title_short: "Superheroes",
            duration: 237,
            rank: 604787,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/1/b/c/0/1bc57c07bfaf6a265e06ce9574390e0e.mp3?hdnea=exp=1771766144~acl=/api/1/1/1/b/c/0/1bc57c07bfaf6a265e06ce9574390e0e.mp3*~data=user_id=0,application_id=42~hmac=aab05bbc81d0f733d51535452844176b65766d73c3272887eb944d68dfe94a66",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 7
        },
        {
            id: 3135560,
            title: "High Life",
            title_short: "High Life",
            duration: 201,
            rank: 588595,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/e/e/a/0/eea4fd9467e697d503998dff44ceeaa3.mp3?hdnea=exp=1771766144~acl=/api/1/1/e/e/a/0/eea4fd9467e697d503998dff44ceeaa3.mp3*~data=user_id=0,application_id=42~hmac=f7ba2aaad1bfbcb78e098ebfaa227acd4729783814dca39ca1e010eaf736ee82",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 8
        },
        {
            id: 3135561,
            title: "Something About Us",
            title_short: "Something About Us",
            duration: 232,
            rank: 764640,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/c/f/f/0/cff7c95e11ba9f6ac3ff0401a81df4f5.mp3?hdnea=exp=1771766144~acl=/api/1/1/c/f/f/0/cff7c95e11ba9f6ac3ff0401a81df4f5.mp3*~data=user_id=0,application_id=42~hmac=9fe5a2bd8117b834eb34df936a913b7e6252b13723e82760cf27052f2655ec8f",
            explicit: false,
            explicit_content_lyrics: 6,
            track_number: 9
        },
        {
            id: 3135562,
            title: "Voyager",
            title_short: "Voyager",
            duration: 227,
            rank: 739634,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/b/c/9/0/bc95bc4a6fdcf3e9b1672229f679eea1.mp3?hdnea=exp=1771766144~acl=/api/1/1/b/c/9/0/bc95bc4a6fdcf3e9b1672229f679eea1.mp3*~data=user_id=0,application_id=42~hmac=530cc7b932d676da067dabf8f11a1e100444096ecb59340d40e452a0773feab4",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 10
        },
        {
            id: 3135563,
            title: "Veridis Quo",
            title_short: "Veridis Quo",
            duration: 344,
            rank: 564752,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/2/8/7/0/2874a06fd8977c126f22a3ac3ed8f088.mp3?hdnea=exp=1771766144~acl=/api/1/1/2/8/7/0/2874a06fd8977c126f22a3ac3ed8f088.mp3*~data=user_id=0,application_id=42~hmac=6a607ec57384640c10c6b9f6f853a5d8b6e164cd1c55690b13bca3f3fe1d61f7",
            explicit: false,
            explicit_content_lyrics: 6,
            track_number: 11
        },
        {
            id: 3135564,
            title: "Short Circuit",
            title_short: "Short Circuit",
            duration: 206,
            rank: 564752,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/3/6/e/0/36e5f73be207a7407c10cf360143df23.mp3?hdnea=exp=1771766144~acl=/api/1/1/3/6/e/0/36e5f73be207a7407c10cf360143df23.mp3*~data=user_id=0,application_id=42~hmac=bda6d69648a95698e1db51ce02deab2d94a489dd9ad8b9518a43dc2ac14fea45",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 12
        },
        {
            id: 3135565,
            title: "Face to Face",
            title_short: "Face to Face",
            duration: 240,
            rank: 697442,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/9/e/3/0/9e3ec9c3d57a0716e9f710682f381c46.mp3?hdnea=exp=1771766144~acl=/api/1/1/9/e/3/0/9e3ec9c3d57a0716e9f710682f381c46.mp3*~data=user_id=0,application_id=42~hmac=1487e8f0c3feab185c0e8c30c1e04fe14c7f246a11e2a08bfa2c2119aa847f05",
            explicit: false,
            explicit_content_lyrics: 0,
            track_number: 13
        },
        {
            id: 3135566,
            title: "Too Long",
            title_short: "Too Long",
            duration: 600,
            rank: 604787,
            preview: "https://cdnt-preview.dzcdn.net/api/1/1/1/2/3/0/1236a38b4ddb538bc34275c34eaad763.mp3?hdnea=exp=1771766144~acl=/api/1/1/1/2/3/0/1236a38b4ddb538bc34275c34eaad763.mp3*~data=user_id=0,application_id=42~hmac=23e4b124f5b2b2b60a5e8fccf2d357e852b67f81db35956a0290bb5ba1e17917",
            explicit: false,
            explicit_content_lyrics: 6,
            track_number: 14
        }
    ]
};

// Éléments DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');
const resultCount = document.getElementById('resultCount');
const playerSection = document.getElementById('playerSection');
const playerCover = document.getElementById('playerCover');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const playerDuration = document.getElementById('playerDuration');
const audioPlayer = document.getElementById('audioPlayer');
const closePlayer = document.getElementById('closePlayer');

let currentAudio = null;

// Afficher toutes les pistes au chargement
function displayAllTracks() {
    displayResults(ALBUM_DATA.tracks);
}

// Afficher les résultats
function displayResults(tracks) {
    if (!tracks || tracks.length === 0) {
        resultsDiv.innerHTML = '<div class="no-results"><i class="fas fa-music"></i> Aucune piste trouvée</div>';
        resultCount.textContent = '(0)';
        return;
    }

    resultCount.textContent = (${tracks.length});
    
    resultsDiv.innerHTML = tracks.map(track => {
        const explicitBadge = track.explicit_content_lyrics > 0 ? 
            '<span class="explicit-badge">Explicit</span>' : '';
        
        return `
        <div class="music-card" onclick="playTrack(${track.id}, '${track.title.replace(/'/g, "\\'")}', '${ALBUM_DATA.artist}', '${ALBUM_DATA.cover_medium}', '${track.preview}', ${track.duration})">
            <span class="track-number">${track.track_number}</span>
            <img src="${ALBUM_DATA.cover_medium}" alt="${track.title}" loading="lazy">
            <h3>${track.title} ${explicitBadge}</h3>
            <p class="artist-name">${ALBUM_DATA.artist}</p>
            <div class="track-details">
                <span><i class="fas fa-chart-line"></i> #${track.rank}</span>
                <span class="duration"><i class="far fa-clock"></i> ${formatDuration(track.duration)}</span>
            </div>
            <span class="preview-badge"><i class="fas fa-headphones"></i> Extrait 30s</span>
        </div>
    `}).join('');
    
    // Log pour montrer la structure des données (comme demandé)
    console.log('Données Deezer chargées:', {
        album: ALBUM_DATA,
        total_tracks: ALBUM_DATA.tracks.length,
        total_fans: ALBUM_DATA.fans,
        first_track: ALBUM_DATA.tracks[0]
    });
}

// Formater la durée
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return ${minutes}:${remainingSeconds.toString().padStart(2, '0')};
}

// Jouer un morceau
function playTrack(id, title, artist, cover, preview, duration) {
    // Arrêter la lecture en cours
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Mettre à jour les informations du lecteur
    playerCover.src = cover;
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    playerDuration.textContent = Durée: ${formatDuration(duration)};
    audioPlayer.src = preview;
    
    // Afficher le lecteur
    playerSection.style.display = 'block';
    
    // Jouer l'audio
    audioPlayer.play();
    currentAudio = audioPlayer;
    
    console.log(Lecture du morceau: ${title} (ID: ${id}));
}

// Fonction de recherche
function searchMusic(query) {
    if (!query.trim()) {
        displayAllTracks();
        return;
    }

    const searchTerm = query.toLowerCase();
    const filteredTracks = ALBUM_DATA.tracks.filter(track => 
        track.title.toLowerCase().includes(searchTerm) || 
        track.title_short.toLowerCase().includes(searchTerm)
    );
    
    displayResults(filteredTracks);
    
    console.log(Recherche: "${query}" - ${filteredTracks.length} résultat(s));
}

// Fermer le lecteur
closePlayer.addEventListener('click', () => {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    playerSection.style.display = 'none';
});

// Recherche au clic sur le bouton
searchBtn.addEventListener('click', () => {
    searchMusic(searchInput.value);
});

// Recherche avec la touche Entrée
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMusic(searchInput.value);
    }
});

// Afficher toutes les pistes au chargement
window.addEventListener('load', () => {
    displayAllTracks();
    console.log('=== MelodyStream - Données Deezer ===');
    console.log('Album:', ALBUM_DATA.title);
    console.log('Artiste:', ALBUM_DATA.artist);
    console.log('Fans:', ALBUM_DATA.fans.toLocaleString());
    console.log('Pistes:', ALBUM_DATA.nb_tracks);
    console.log('Durée totale:', formatDuration(ALBUM_DATA.duration));
    console.log('=====================================');
});

// Rendre la fonction playTrack accessible globalement
window.playTrack = playTrack;
