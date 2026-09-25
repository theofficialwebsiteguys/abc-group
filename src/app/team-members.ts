export interface TeamMember {
  name: string;
  title: string;
  image: string;
}

// Shown on the Team page and the home page: photo, name and title only.
export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Angel Jacome', title: 'President & CEO', image: 'assets/team/angel-jacome.png' },
  { name: 'Jesus Jacome', title: 'Senior Managing Partner', image: 'assets/team/jesus-jacome.png' },
  { name: 'Joanna Jacome', title: 'Hub & HR Manager', image: 'assets/team/joanna-jacome.png' },
  { name: 'Gabe Ganjura', title: 'Senior Partner', image: 'assets/team/gabe.png' },
  { name: 'Kiara Smith', title: 'Senior Partner', image: 'assets/team/kiara.jpg' },
  { name: 'Keunte Wilson', title: 'Senior Partner', image: 'assets/team/keunte.jpg' },
  // Approved title and photo not provided yet; the card shows initials until then.
  { name: 'Blake Clemens', title: '', image: '' }
];
