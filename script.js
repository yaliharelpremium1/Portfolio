document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENU TOGGLE LOGIC ---
    const menuBtn = document.getElementById('menu-toggle-btn');
    const closeBtn = document.querySelector('.close-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.overlay-link');

    function toggleMenu() { 
        if (menuOverlay) {
            menuOverlay.classList.toggle('active'); 
        }
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- 2. SECTION TRACKER LOGIC ---
    const trackerItems = document.querySelectorAll('.tracker-item');
    const sections = document.querySelectorAll('.snap-section');
    const sectionNameDisplay = document.getElementById('current-section-name');

    trackerItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const yOffset = targetSection.offsetTop;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        });
    });

    const observerOptions = { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackerItems.forEach(item => item.classList.remove('active'));
                const id = entry.target.getAttribute('id');
                const activeItem = document.querySelector(`.tracker-item[data-target="${id}"]`);
                if (activeItem) activeItem.classList.add('active');
                if(sectionNameDisplay && id) sectionNameDisplay.innerText = id.toUpperCase();
            }
        });
    }, observerOptions);

    sections.forEach(section => { if(section.id) sectionObserver.observe(section); });

    // --- 3. TECHNICAL STATUS MAP ---
    const statusMap = {
        'project management': 'TIMELINE', 'festival operation': 'OPS TEAM DEPLOYED', 'music industry': 'A&R CONFIRMED',
        'stakeholders': 'COMMUNICATION ONLINE', 'budgeting': 'PLANNING PHASE', 'event planning': 'PLANNING PHASE',
        'artist coord': 'PLANNING PHASE', 'operations': 'EVENT PHASE', 'ticketing': 'EVENT PHASE', 'vendors': 'EVENT PHASE',
        'crew & staff': 'PRE-EVENT PHASE', 'risk & safety': 'PRE-EVENT PHASE', 'leadership': 'PRE-EVENT PHASE'
    };
    
    // --- MAIN PHOTOS GALLERY (TOP IMAGES) ---
    // UPDATED: Now uses .jpg to match your other folders
    const defaultBgImages = [
        'MainPhotos/01.jpeg', 
        'MainPhotos/02.jpeg', 
        'MainPhotos/03.jpeg', 
        'MainPhotos/04.jpeg',
        'MainPhotos/05.jpeg',
    ];

    const defaultImage = 'https://images.unsplash.com/photo-1549491689-18ae42571764?q=80&w=1000&auto=format&fit=crop'; 
    
    // --- PROJECT DATA ---
    const projectData = {
        'work': [
            { 
                name: "LANEWAY", role: "VOLUNTEERS COORDINATOR", cat: "Australia Wide", year: "2025", 
                summary: "2025 ARIA AWARDS WINNER FOR BEST MUSIC FESTIVAL, EXPENDS OVER SIX STATES",
                details: "Coordinated a team of 200+ volunteers over 6 states, managing recruitment, scheduling, and training. Oversaw on site operations including accreditation, stage support, guest services, and safety compliance. Acted as the main point of contact between volunteers, production staff, and festival management to ensure seamless event delivery and well worth volunteers experince.", 
                folder: "LANEWAY/", count: 9, instagram: "https://www.instagram.com/lanewayfest/", video_link: "https://lanewayfestival.com" 
            },
            { 
                name: "LISTEN OUT", role: "OPERATION MANAGER", cat: "AUSTRALIA Wide", year: "2023,24,25", 
                summary: "Australia's leading national muilti genre music festival touring major capital cities.",
                details: "Oversaw all festival operations, including site logistics, stage setup, vendor coordination, and staff management. Developed operational plans, managed budgets, and ensured compliance with safety and licensing regulations. Coordinated across production, security, and artist teams to guarantee smooth, seamless festival delivery", 
                folder: "LISTEN OUT/", count: 4, instagram: "https://www.instagram.com/listenout/", video_link: "https://listenout.com.au" 
            },
            { 
                name: "BEYOND THE VALLEY", role: "COORDINATOR", cat: "Australia", year: "2022,23,24,25", 
                summary: "ARIA nominated music festival, multi-day music festival held annually at Barunah Plains over the New Year",
                details: "Responsible for supporting the planning and delivery of one of Australia’s premier multi-day music and arts festivals. This role oversees logistics, artist and crew scheduling, vendor coordination, and on-site operations to ensure a seamless festival experience. Works closely with production, site, and programming teams to maintain timelines, troubleshoot issues, and uphold the festival’s creative vision, safety standards, and exceptional audience experience", 
                folder: "BEYOND THE VALLEY/", count: 6, instagram: "https://www.instagram.com/beyondthevalleyfest/?hl=en", video_link: "https://www.beyondthevalley.com.au" 
            },
            { 
                name: "ST KILDA FESTIVAL", role: "HEAD OF PROGRAMMING", cat: "AUSTRALIA Wide", year: "2025", 
                summary: "Australia's largest free celebration of summer, music, and community culture.",
                details: "Led all festival programming, curating line ups across multiple stages and genres. Managed artist relations, bookings, and contracts, while coordinating schedules with production, operations, and marketing teams. Oversaw creative direction to ensure a cohesive festival experience, balancing audience engagement with budget and logistical constraints", 
                folder: "ST KILDA FESTIVAL/", count: 5, instagram: "https://www.instagram.com/stkildafestival/", video_link: "https://www.stkildafestival.com.au" 
            },
            { 
                name: "A3", role: "TICKETING MANAGER", cat: "Melbourne", year: "2025", 
                summary: "A distinct and deliberate gathering of electronic music surrounded by meaningful design, architecture and art",
                details: "Managed all aspects of ticketing operations, including setup on ticketing platform Eventbrite. Oversaw ticket sales, access control, and entry systems, ensuring smooth gate operations. Coordinated with production, security, and operations teams to monitor capacity, troubleshoot issues, and deliver a seamless experience for all attendees.", 
                folder: "A3/", count: 6, instagram: "https://www.instagram.com/a3festival/?hl=en", video_link: "https://a3festival.com" 
            },
            { 
                name: "STRAWBERRY FIELDS", role: "GATE MANAGER", cat: "NSW", year: "2024,25", 
                summary: "One of the biggest music festival in Australia with over 150 local and international musicians and artists display their work",
                details: "Managed all festival entry operations, including ticket scanning, RFID wristband systems, and access control. Supervised gate staff, coordinated with security and operations teams, and ensured smooth crowd flow. Monitored real-time entry data, troubleshooting issues to maintain efficiency and a seamless attendee experience", 
                folder: "STRAWBERRY FIELDS/", count: 4, instagram: "https://www.instagram.com/strawberryfields_festival/?hl=en", video_link: "https://www.strawberry-fields.com.au" 
            },
            { 
                name: "MELBOURNE GRAND PRIX", role: "AREA MANAGER", cat: "Melbourne", year: "2022,23,24,25", 
                summary: "The pinnacle of motorsport racing held annually at the Albert Park Circuit.",
                details: "Oversaw operations for a designated event area, managing staff, volunteers, and contractors. Coordinated logistics, crowd flow, and access control to ensure safety and efficiency. Liaised with security, medical, and production teams to maintain seamless event delivery while resolving on the ground issues in real time", 
                folder: "FORMULA 1/", count: 6, instagram: "https://www.instagram.com/ausgp/?hl=en", video_link: "https://www.grandprix.com.au" 
            },
            { 
                name: "MOTOCYCLE GRAND PRIX", role: "AREA MANAGER", cat: "Melbourne", year: "2024,25", 
                summary: "Biggest motocycle racing event in Australia featuring the world's top riders.",
                details: "Oversaw operations for a designated event area, managing staff, volunteers, and contractors. Coordinated logistics, crowd flow, and access control to ensure safety and efficiency. Liaised with security, medical, and production teams to maintain seamless event delivery while resolving on the ground issues in real time", 
                folder: "MOTOCROSS/", count: 6, instagram: "https://www.instagram.com/ausmotogp/", video_link: "https://www.motogp.com/en" 
            },
            { 
                name: "MELBOURNE MARATHON", role: "PARTNERSHIP MANAGER", cat: "Australia", year: "2024,25", 
                summary: "Melbourne biggest Marathon race that runs for 3 days at the MCG.",
                details: "Built and maintained relationships with corporate sponsors, charities, and community partners. Coordinated partnership deliverables, branding placement, and on-course activations. Managed sponsor logistics, signage placement, and hospitality areas. Ensured all partner obligations were met, provided regular updates, and delivered post-event reports. Worked closely with operations, marketing, and vendor teams to maximise partner exposure and attendee engagement.", 
                folder: "MELBOURNE MARATHON/", count: 5, instagram: "https://www.instagram.com/melbmara/?hl=en", video_link: "https://melbournemarathon.com.au" 
            },
            { 
                name: "AUSTRALIA OPEN", role: "PARTNERSHIP MANAGER", cat: "Melbourne", year: "2023,24,25", 
                summary: "One of the four Grand Slam tennis tournaments and a major global sporting event.",
                details: "Managed relationships with sponsors, community groups, and festival partners. Developed partnership agreements, coordinated deliverables, and ensured sponsor activations aligned with festival objectives. Acted as the main point of contact for stakeholders, maintaining clear communication and supporting collaborative opportunities to enhance the festival experience", 
                folder: "AUSTRALIA OPEN/", count: 5, instagram: "https://www.instagram.com/australianopen/?hl=en", video_link: "https://ausopen.com" }, 
            { 
                name: "PITCH MUSIC & ARTS", role: "GATE MANAGER", cat: "Australia", year: "2022,23,24,25", 
                summary: "Multi-day event celebrating live music, art, and community culture",
                details: "Oversaw all gate staff, including ticket scanners, wristbanders, bag checkers, and supervisors. Coordinated entry workflows, queue management, and crowd movement. Liaised with security, operations, and ticketing teams to resolve issues quickly. Ensured ID checks, wristband distribution, and accreditation processes ran efficiently. Managed shift scheduling, staff briefing, and on-site problem-solving to maintain a positive patron experience", 
                folder: "PITCH/", count: 4, instagram: "https://www.instagram.com/pitchmusicandarts/", video_link: "https://www.pitchfestival.com.au" 
            },           
        ],
        'freelance': [
            { 
                name: "NIGHTCLUBS", role: "PROMOTER", cat: "MELBOURNE / Sydney", year: "2025", 
                summary: "Produce my own event across several nightclubs with my team and hosting the biggest starts at our clubs. ",
                details: "Produce and plan my own nightclubs in both Melbourne and Sydney. We have hosted the biggest starts that came to Australia including Snoop Dog, Central Cee, Doja Cat, Travis Scott and Kevein Hurt. Monitor and build the events and team from scratch", 
                folder: "NIGHTCLUB PROMOTER/", count: 5, instagram: "https://www.instagram.com/mscollinsmelb/?hl=en", video_link: "https://mscollins.com.au" 
            },
            { 
                name: "LOCAL MUSIC ARTISTS", role: "ADVISOR", cat: "MELBOURNE / Sydney", year: "2025", 
                summary: "Guiding artist career trajectories through strategic planning and industry networking.",
                details: "Advised artists on career development, branding, and release strategies. Supported planning for live performances, tours, and festival applications. Provided guidance on contract negotiation, networking, and industry opportunities. Connected artists with managers, promoters, and production teams to expand professional networks and create sustainable career growth", 
                folder: "LOCAL MUSIC ARTISTS/", count: 1, instagram: "https://www.instagram.com/aria_official/?hl=en", video_link: "https://www.aria.com.au/awards/" 
            },
            { 
                name: "ARIA AWARDS", role: "JUDGE", cat: "Sydney", year: "2025", 
                summary: "Australia’s premier music awards, celebrating excellence across all genres and recognizing outstanding achievements by Australian artists, producers, and industry professionals.",
                details: "Reviewed and evaluated submissions across multiple award categories, providing informed and impartial judgments. Collaborated with other industry professionals to determine nominees and winners. Contributed expertise on trends, artist impact, and musical quality, ensuring the awards reflected excellence and innovation in the Australian music industry", 
                folder: "ARIA AWARDS/", count: 4, instagram: "https://thismuchtalentau.com/", video_link: "" 
            },
            { 
                name: "POWFU", role: "MUSIC PRODUCER", cat: "Online", year: "2018-2026", 
                summary: "Globally recognized indie/lo-fi artist, producing tracks for releases and live performance adaptations.",
                details: "Produced and arranged instrumental tracks, crafting beats that aligned with Powfu’s style. Collaborated with the artist and engineers to refine sound design and track structure. Delivered high quality beats for recordings and live performance use, ensuring creative vision and project timelines were met", 
                folder: "POWFU/", count: 4, instagram: "https://www.instagram.com/pow.fu/?hl=en", video_link: "https://open.spotify.com/artist/6bmlMHgSheBauioMgKv2tn?si=xsvTUlHyRd24ABnN3aAHBA" 
            },
            { 
                name: "IVRI", role: "MUSIC PRODUCER", cat: "Online", year: "2018-2026", 
                summary: "An emerging electronic artist from New York, designing immersive soundscapes for recordings and live performances.",
                details: "Created and engineered custom sounds, effects, and audio textures for studio recordings and live shows. Collaborated with the artist and production team to ensure the sound aligned with creative vision. Managed audio design workflows, mixing, and implementation for live performance integration, delivering high quality, professional results.", 
                folder: "IVRI/", count: 4, instagram: "https://www.instagram.com/ivri0.o/?hl=en", video_link: "https://open.spotify.com/artist/5EjK7aUvQ9LMNqc2zXiWLS?si=AUMtKltvRzCYaineSnXsTw" 
            },
            { 
                name: "KADO", role: "MUSIC PRODUCER", cat: "Online", year: "2022-2026", 
                summary: "Rising artist, writing and developing original songs across multiple genres.",
                details: "Co-wrote lyrics, melodies, and song structures in collaboration. Developed hooks, chord progressions, and arrangements tailored to the artist’s style. Assisted in refining tracks for recordings and live performance, ensuring alignment with creative vision and audience engagement", 
                folder: "KADO/", count: 4, instagram: "https://www.instagram.com/kado.wav/", video_link: "https://open.spotify.com/artist/3hBvETCf1HBhhZSv9kc1Tb?si=M8RwBI8SQuqmk3qOFc7f1Q" 
            },
        ],
        'volunteer': [
            { 
                name: "REY RECORDS", role: "ARTIST MANAGER", cat: "Melbourne", year: "2025", 
                summary: "Managing artist development and business strategy to drive career growth.",
                details: "Coordinated artist schedules, tours, and recording sessions. Negotiated contracts, liaised with promoters, labels, and production teams. Provided career guidance, branding advice, and marketing strategy support. Developed long-term growth plans while ensuring artists’ creative vision aligned with business objectives", 
                folder: "REY RECORDS/", count: 3, instagram: "https://www.instagram.com/reyrecords/?hl=en", video_link: "www.reyrecords.com" 
            },
            { 
                name: "HEAVY MUSIC MAGAZINE", role: "GIG REVIEWER", cat: "Victoria", year: "2024", 
                summary: "Documenting the live music scene through engaging editorial content and reviews.",
                details: "Attended live performances and festivals, documenting setlists, production quality, and crowd engagement. Wrote detailed, engaging reviews under tight deadlines. Conducted interviews with artists and event organizers. Edited and submitted content for publication, contributing to the magazine’s coverage and audience growth", 
                folder: "HEAVY MAGAZINE/", count: 4, instagram: "https://www.instagram.com/heavy__mag/?hl=en", video_link: "https://heavymag.com.au" 
            },
        ],
        'advisor': [
            { 
                name: "CITY OF PORT PHILIPS", role: "EVENT PRODUCER", cat: "Port Philips (Melbourne)", year: "2025", 
                summary: "Producing community focused events while managing budgets and council compliance.",
                details: "Planned, coordinated, and executed events from concept to delivery. Managed budgets, timelines, and supplier contracts. Oversaw operations, including logistics, staffing, and safety compliance. Collaborated with artists, community groups, and council stakeholders to ensure events were engaging, accessible, and delivered on time and within budget", 
                folder: "CITY OF PORT PHILIPS/", count: 4, instagram: "https://www.instagram.com/coppyouthservices/", video_link: "https://www.portphillip.vic.gov.au/council-services/family-youth-and-children/middle-years-and-youth-services" 
            },
            { 
                name: "MUSIC IN EXILE", role: "BOARD DIRECTOR", cat: "Melbourne", year: "2024", 
                summary: "Contributing strategic governance and technical advice to support diverse artists.",
                details: "Consulting on cost-effective lighting fixture specs and vendor selection.", 
                folder: "MUSIC IN EXILE/", count: 5, instagram: "https://www.instagram.com/music.in.exile/", video_link: "https://musicinexile.com.au" 
            },
            { 
                name: "NEW & APPROVED (SYN RADIO)", role: "PRODUCER & ANNOUCNER", cat: "Melbourne", year: "2025", 
                summary: "Community based youth radio station in Melbourne, delivering engaging music, interviews, and live sessions.",
                details: "Produced show content, curated playlists, and coordinated live sessions and interviews with artists. Hosted on air segments, managing timing, audience interaction, and live announcements. Oversaw recording, editing, and broadcasting workflows to ensure professional, high quality output", 
                folder: "NEW & APPROVED/", count: 4, instagram: "https://www.instagram.com/newandapprovedsyn/", video_link: "https://www.syn.org.au" 
            },
            { 
                name: "BEYOND BLUE", role: "MC & EVENT STAFF", cat: "Melbourne", year: "2021-Current", 
                summary: "A leading mental health organization, engaging audiences and promoting awareness through music, presentations, and community activities.",
                details: "Hosted and emceed live events, engaging audiences and introducing speakers and performers. Assisted with event setup, operations, and coordination of staff and volunteers", 
                folder: "BEYOND BLUE/", count: 4, instagram: "https://www.instagram.com/beyondblueofficial/?hl=en", video_link: "https://www.beyondblue.org.au" 
            },
        ]
    };

    function setupWorkAccordion() {
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => {
            item.removeEventListener('click', handleProjectClick);
            item.addEventListener('click', handleProjectClick);
        });
    }

    function handleProjectClick() {
        const item = this;
        const container = item.parentElement;
        const details = container.querySelector('.project-details');
        const strobe = container.querySelector('.strobe-layer');
        strobe.classList.add('flash-active');
        setTimeout(() => strobe.classList.remove('flash-active'), 300);
        document.querySelectorAll('.project-container').forEach(other => {
            if(other !== container) {
                other.classList.remove('active');
                other.querySelector('.project-details').style.maxHeight = null;
            }
        });
        container.classList.toggle('active');
        if (container.classList.contains('active')) {
            details.style.maxHeight = details.scrollHeight + 100 + "px";
            setTimeout(() => { container.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 350);
        } else {
            details.style.maxHeight = null;
        }
    }

    const projectListContainer = document.querySelector('.project-list');
    function renderProjects(category, showAll = false) {
        const projects = projectData[category] || projectData['work'];
        const limit = showAll ? projects.length : 5; 
        const visibleProjects = projects.slice(0, limit);
        let htmlContent = visibleProjects.map((p, index) => {
            let imageList = [];
            if (p.folder && p.count) {
                for (let i = 1; i <= p.count; i++) {
                    const extension = p.ext || ".jpg"; 
                    const fileName = String(i).padStart(2, '0') + extension;
                    imageList.push(`${p.folder}${fileName}`);
                }
            } else if (p.img) {
                imageList.push(p.img);
            } else {
                imageList.push(defaultImage);
            }
            // FIX: Using single quotes for data-gallery attribute to avoid conflicts with JSON double quotes
            const galleryData = JSON.stringify(imageList);
            const uniqueId = `proj-${index}`;
            return `
            <div class="project-container">
                <div class="project-item hover-trigger">
                    <div class="p-name">${p.name}</div>
                    <div class="p-role">${p.role}</div>
                    <div class="p-cat">${p.cat}</div>
                    <div class="p-year">${p.year}</div>
                    <div class="p-arrow">↓</div>
                </div>
                <div class="strobe-layer"></div>
                <div class="project-details">
                    <div class="detail-content">
                        <div class="img-wrapper" id="${uniqueId}">
                            ${imageList.length > 1 ? `<div class="image-counter">01 / ${String(imageList.length).padStart(2,'0')}</div>` : ''}
                            <img src="${imageList[0]}" alt="${p.name}" class="detail-img" data-gallery='${galleryData}' data-current="0">
                            ${imageList.length > 1 ? `
                                <div class="gallery-btn-container">
                                    <button class="next-img-btn hover-trigger">NEXT IMG →</button>
                                </div>
                            ` : ''}
                        </div>
                        <h4 class="p-summary">${p.summary}</h4>
                        <p class="detail-text">${p.details}</p>
                        <div class="detail-links">
                            ${p.instagram ? `<a href="${p.instagram}" target="_blank" class="detail-btn hover-trigger">INSTAGRAM</a>` : ''}
                            ${p.video_link ? `<a href="${p.video_link}" target="_blank" class="detail-btn hover-trigger">WEBSITE</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `}).join('');
        if (!showAll && projects.length > limit) {
            htmlContent += `
                <div class="load-more-container">
                    <button id="load-more-btn" class="load-more-btn hover-trigger">VIEW ALL (${projects.length})</button>
                </div>
            `;
        }
        projectListContainer.innerHTML = htmlContent;
        setupWorkAccordion(); 
        setupGalleryListeners(); 
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => { renderProjects(category, true); });
        }
    }

    function setupGalleryListeners() {
        const galleryButtons = document.querySelectorAll('.next-img-btn');
        galleryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default button action
                e.stopPropagation(); // Stop click from bubbling up
                
                const wrapper = btn.closest('.img-wrapper');
                const imgTag = wrapper.querySelector('.detail-img');
                const counter = wrapper.querySelector('.image-counter');
                
                // Safety check
                if (!imgTag) return;
                
                // Parse the gallery data (now safer due to single quote fix)
                let images = [];
                try {
                    images = JSON.parse(imgTag.getAttribute('data-gallery'));
                } catch(err) {
                    console.error("Gallery data parse error", err);
                    return;
                }

                let currentIdx = parseInt(imgTag.getAttribute('data-current'));
                currentIdx++;
                
                // Loop back to start
                if (currentIdx >= images.length) currentIdx = 0; 
                
                imgTag.src = images[currentIdx];
                imgTag.setAttribute('data-current', currentIdx);
                
                if(counter) counter.innerText = `${String(currentIdx + 1).padStart(2,'0')} / ${String(images.length).padStart(2,'0')}`;
            });
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterCategory = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(filterCategory);
        });
    });
    renderProjects('work'); 

    // --- BACKGROUND IMAGE CYCLING ---
    const imageSections = document.querySelectorAll('.image-target');
    let currentImageIndex = 0;

    function updateImages() {
        if (defaultBgImages.length === 0) return;
        const fileUrl = defaultBgImages[currentImageIndex];
        
        imageSections.forEach(section => {
            section.style.backgroundImage = `url('${fileUrl}')`;
            // Ensure background is always centered
            section.style.backgroundPosition = "center center";
            section.style.boxShadow = "inset 0 0 0 2000px rgba(0,0,0,0.3)";
        });

        // Loop index
        currentImageIndex++;
        if (currentImageIndex >= defaultBgImages.length) {
            currentImageIndex = 0;
        }
    }

    // Set initial image
    updateImages();

    // Change every 15 seconds
    setInterval(updateImages, 15000);

    // Keep manual click capability
    imageSections.forEach(section => {
        section.addEventListener('click', (e) => {
            if(e.target === section || e.target.classList.contains('mouse-mover') || e.target.classList.contains('huge-bg-text')) {
                updateImages();
            }
        });
    });

    // --- CURSOR LOGIC ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const baseTriggers = document.querySelectorAll('.hover-trigger');
    const spotCheckTriggers = document.querySelectorAll('.spot-check-trigger');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let targetOffset = 0; 
    let currentOffset = 0; 
    const moveSpeed = 0.05; 
    const offsetSpeed = 0.08; 

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    });

    function animateCursor() {
        followerX += (mouseX - followerX) * moveSpeed;
        followerY += (mouseY - followerY) * moveSpeed;
        currentOffset += (targetOffset - currentOffset) * offsetSpeed;
        if (follower) follower.style.transform = `translate3d(${followerX + currentOffset}px, ${followerY + currentOffset}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    baseTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
             if (!trigger.classList.contains('spot-check-trigger')) follower.classList.add('active');
        });
        trigger.addEventListener('mouseleave', () => {
             if (!trigger.classList.contains('spot-check-trigger')) follower.classList.remove('active');
        });
    });

    spotCheckTriggers.forEach(trigger => {
        const keyElement = trigger.querySelector('h2') || trigger.querySelector('h3');
        const key = keyElement ? keyElement.innerText.toLowerCase() : '';
        const status = statusMap[key] || 'STATUS UNKNOWN';
        trigger.addEventListener('mouseenter', () => {
            follower.classList.remove('active');
            follower.classList.add('spot-check-active');
            follower.setAttribute('data-status', status);
        });
        trigger.addEventListener('mouseleave', () => {
            follower.classList.remove('spot-check-active');
            follower.removeAttribute('data-status');
        });
    });

    imageSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            follower.classList.add('cycle-active');
            targetOffset = 65; 
        });
        section.addEventListener('mouseleave', () => {
            follower.classList.remove('cycle-active');
            targetOffset = 0;
        });
    });

    const lineupRows = document.querySelectorAll('.lineup-row');
    lineupRows.forEach(row => {
        const header = row.querySelector('.lineup-header');
        header.addEventListener('click', () => {
            const body = row.querySelector('.lineup-body');
            lineupRows.forEach(otherRow => {
                if(otherRow !== row) {
                    otherRow.classList.remove('active');
                    otherRow.querySelector('.lineup-body').style.maxHeight = null;
                }
            });
            row.classList.toggle('active');
            if (row.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });

    const timeDisplay = document.getElementById('live-time');
    const scrollProgress = document.getElementById('scroll-progress');
    function updateTime() {
        const now = new Date();
        timeDisplay.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    }
    setInterval(updateTime, 1000);
    updateTime();

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = Math.floor((scrolled / docHeight) * 100);
        scrollProgress.innerText = percentage < 10 ? "0" + percentage : percentage;
    });

    const mover = document.querySelector('.mouse-mover');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 35; 
        const y = (window.innerHeight / 2 - e.pageY) / 35;
        if(mover) mover.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    const pillars = document.querySelectorAll('.data-pillar');
    function animatePillars() {
        pillars.forEach(pillar => {
            const node = pillar.querySelector('.pillar-node');
            const rect = pillar.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
            let moveY = (progress - 0.5) * 500; 
            node.style.transform = `translateY(${moveY}px)`;
        });
        requestAnimationFrame(animatePillars);
    }
    animatePillars();
});