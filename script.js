/**
 * 69ERS Charter Application Script
 * Contains Content Data and UI Logic
 */

/* -------------------------------------------------------------------------- */
/*                                CONTENT DATA                                */
/* -------------------------------------------------------------------------- */
const charterData = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: `
            <p>This document outlines the policies, guidelines, and code of conduct for our motorcycle club, aiming to ensure safety, respect, and camaraderie among all members. It is designed to provide clear expectations and a framework for club operations. Our club adheres to South African road safety regulations, including the K53 driving standards, to ensure all members ride safely and legally.</p>
            <p class="mt-4">The establishment and operation of a motorcycle club in South Africa require a comprehensive understanding of national policies, guidelines, and road safety regulations. This policy document aims to provide a structured framework that aligns with the South African National Road Traffic Act, 1996 (Act No. 93 of 1996), the National Road Safety Strategy 2016-2030, and the K53 Motorcycle Test standards.</p>
            <p class="mt-4">By adhering to these national policies, the club not only promotes road safety but also contributes to the broader objectives of reducing road traffic accidents and fatalities as outlined by the Department of Transport (2014; 2017).</p>
        `
    },
    {
        id: "mission",
        title: "2. Mission Statement",
        content: `
            <p class="text-xl italic border-l-4 border-brand-gold pl-4 text-gray-300">"Our mission is to cultivate a vibrant and responsible motorcycle community that prioritizes safety, camaraderie, and adherence to national regulations."</p>
            <p class="mt-6">We are committed to aligning our club's operations with key legislative frameworks such as the South African National Road Traffic Act, 1996, and the National Road Safety Strategy 2016-2030. We strive to foster an environment of mutual respect, integrity, and accountability within our club.</p>
            <p class="mt-4">Our club is dedicated to promoting road safety and responsible riding practices. We integrate the crucial road safety rules and regulations mandated by the Road Traffic Management Corporation (RTMC) and the South African National Roads Agency (SANRAL) into our operations.</p>
        `
    },
    {
        id: "membership",
        title: "3. Membership",
        content: `
            <h3 class="text-lg font-bold text-brand-gold mt-2">Eligibility</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Must be at least 18 years old.</li>
                <li>Must own a motorcycle.</li>
                <li>Must have a valid CODE 1 motorcycle learners and ultimately license.</li>
                <li>Must agree to abide by the club’s policies and code of conduct.</li>
                <li>Must adhere to the K53 driving standards.</li>
                <li>Conform to the 69-week apprentice, “appy”, procedure.</li>
            </ul>

            <h3 class="text-lg font-bold text-brand-gold mt-6">Application Process</h3>
            <ol class="list-decimal pl-5 mt-2 space-y-1 text-gray-300">
                <li>Complete a membership application form.</li>
                <li>Attend a minimum of three club meetings or rides as a guest.</li>
                <li>Submit the application with a non-refundable application fee.</li>
                <li>Membership approval requires a majority vote from the executive committee.</li>
                <li>New members must attend an orientation session.</li>
            </ol>
            
            <h3 class="text-lg font-bold text-brand-gold mt-6">Membership Dues</h3>
            <p class="mt-2">Monthly membership dues are payable on or before the end of each month. Dues cover administrative costs, event planning, and other club activities. Failure to pay dues may result in suspension.</p>
        `
    },
    {
        id: "structure",
        title: "4. Club Structure and Leadership",
        content: `
            <div class="grid gap-4 md:grid-cols-2 mt-4">
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">President</span>
                    <span class="text-sm">Provides leadership, represents the club publicly, oversees meetings.</span>
                </div>
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">Vice President</span>
                    <span class="text-sm">Assists the President, coordinates club activities.</span>
                </div>
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">Secretary</span>
                    <span class="text-sm">Manages club records, meeting minutes, and communication.</span>
                </div>
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">Treasurer</span>
                    <span class="text-sm">Handles financial matters, dues, budgeting.</span>
                </div>
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">Road Captain</span>
                    <span class="text-sm">Plans rides, ensures safety, educates on K53 regulations.</span>
                </div>
                <div class="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <span class="block font-bold text-brand-gold">Sergeant-at-Arms</span>
                    <span class="text-sm">Maintains order, enforces code of conduct.</span>
                </div>
            </div>
            
            <h3 class="text-lg font-bold text-brand-gold mt-8">Election Procedures</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Elections are held annually in December.</li>
                <li>Voting is conducted by secret ballot via an Online form.</li>
            </ul>
        `
    },
    {
        id: "meetings",
        title: "5. Meetings",
        content: `
            <p>Monthly meetings are held on the <strong class="text-white">first Wednesday of each month</strong> at 20:00 pm. Members are expected to attend all club meetings.</p>
            <p class="mt-4 text-sm bg-red-900/20 p-3 rounded border border-red-900/50">Chronic absenteeism will be met with disciplinary action.</p>
        `
    },
    {
        id: "rides",
        title: "6. Rides and Events",
        content: `
            <h3 class="text-lg font-bold text-brand-gold mt-2">Safety Guidelines</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>All participants must wear appropriate safety gear (Helmets, gloves, jackets, boots).</li>
                <li>Adhere to all traffic laws and ride within your skill level.</li>
                <li>Maintain a safe following distance and use hand signals.</li>
                <li>Ride in a staggered formation to maintain visibility.</li>
            </ul>

            <h3 class="text-lg font-bold text-brand-gold mt-6">Alcohol and Substance Use</h3>
            <p class="mt-2 text-red-400 font-bold">Zero tolerance for alcohol or drug use before or during rides.</p>
            <p>Consumption of alcohol is permitted at social events <em>following</em> rides, but members must ensure they have a safe means of transportation.</p>
        `
    },
    {
        id: "conduct",
        title: "7. Code of Conduct",
        content: `
            <p>Treat all members with respect and dignity. No discrimination based on race, gender, religion, or any other protected characteristic. Harassment of any kind will not be tolerated.</p>
            <p class="mt-4"><strong>Conflict Resolution:</strong> Conflicts should be addressed privately. If unresolved, matters are brought to the executive committee for mediation.</p>
        `
    },
    {
        id: "communication",
        title: "8. Communication",
        content: `
            <p>Official club communications are distributed via email, private forum, and WhatsApp groups. Any communication regarding 69ERS to other entities must be filtered through the Executive Committee.</p>
            <p class="mt-4"><strong>Social Media:</strong> Members must not post any content that could harm the club’s reputation.</p>
        `
    },
    {
        id: "finance",
        title: "9. Financial Management",
        content: `
            <p>The Treasurer prepares an annual budget. No member is allowed to spend club funds without prior approval. Financial transparency is maintained through regular reporting.</p>
        `
    },
    {
        id: "amendments",
        title: "10. Amendment Procedures",
        content: `
            <p>Proposals to amend this document must be submitted in writing. Amendments require a two-thirds majority vote at a monthly meeting.</p>
        `
    },
    {
        id: "roll",
        title: "11. Membership Roll",
        content: `
            <p>The membership roll is updated annually. Founding Members are recognized permanently.</p>
        `
    },
    {
        id: "references",
        title: "12. References",
        content: `
            <ul class="text-sm text-gray-400 space-y-2">
                <li>Arrive Alive. (n.d.). K53 Motorcycle Test.</li>
                <li>Department of Transport. (2014). National Road Traffic Act, 1996.</li>
                <li>South African Police Service (SAPS). (2023). Crime Prevention Through Safe Road Practices.</li>
            </ul>
        `
    }
];

/* -------------------------------------------------------------------------- */
/*                                   UI LOGIC                                 */
/* -------------------------------------------------------------------------- */

// DOM Elements
const appContainer = document.getElementById('app');
const reviewModal = document.getElementById('review-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeModalBtn = document.getElementById('close-modal');
const reviewForm = document.getElementById('review-form');
const sectionNameSpan = document.getElementById('review-section-name');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let currentSectionId = '';

/**
 * Render all charter sections
 */
function renderApp() {
    charterData.forEach((section, index) => {
        const sectionEl = document.createElement('section');
        sectionEl.id = section.id;
        sectionEl.className = "relative group";

        sectionEl.innerHTML = `
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-gold to-yellow-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-brand-gray border border-brand-gold/10 rounded-lg p-6 md:p-8 shadow-2xl">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-800 pb-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">${section.title}</h2>
                    <button onclick="openReviewModal('${section.id}', '${section.title}')" class="flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        Review / Comment
                    </button>
                </div>
                <div class="prose prose-invert prose-brand max-w-none text-gray-300 leading-relaxed">
                    ${section.content}
                </div>
            </div>
        `;
        appContainer.appendChild(sectionEl);
    });
}

/**
 * Modal Handling
 */
window.openReviewModal = function (id, title) {
    currentSectionId = id;
    sectionNameSpan.textContent = title;
    reviewModal.classList.remove('hidden');
    // Animate in
    setTimeout(() => {
        reviewModal.querySelector('div[class*="transform"]').classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
        reviewModal.querySelector('div[class*="transform"]').classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }, 10);
};

function closeReviewModal() {
    reviewModal.classList.add('hidden');
    reviewForm.reset();
}

closeModalBtn.addEventListener('click', closeReviewModal);
modalBackdrop.addEventListener('click', closeReviewModal);

/**
 * Review Submission
 */
reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = reviewForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Prepare Params
    const templateParams = {
        from_name: document.getElementById('name').value,
        section_id: currentSectionId,
        message: document.getElementById('comment').value,
        to_email: '69ersbikeclub@gmail.com'
    };

    // Send Email (Mocked if no key, but code is ready)
    if (typeof emailjs !== 'undefined') {
        const serviceID = 'service_3ogs0up'; // Updated from User
        const templateID = 'template_12r1ek8'; // Updated from User

        // Send the email
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                alert(`Success! Review for section "${currentSectionId}" has been sent.`);
                closeReviewModal();
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send review. Please try again later.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });

    } else {
        console.error("EmailJS not loaded");
        alert("Email system not initialized. (Check check console)");
        submitBtn.disabled = false;
    }
});

/**
 * Mobile Menu Toggle
 */
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Initialize
document.addEventListener('DOMContentLoaded', renderApp);
