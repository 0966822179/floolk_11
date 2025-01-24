import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    { name: 'นางสาวมยุลีย์ พงษ์บุพศิริกุล', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg', position: 'หัวหน้าสาขางานเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวณัฐกานต์ ภิรมณ์', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg', position: 'รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวสวิตตา ประทุม', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10409.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวธัญญลักษณ์ กันธะ', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายไพศาล ณ ลำปาง', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10426.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวนาริน พรมมี', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10462.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายเทวฤทธิ์ วงค์ฉายา', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10466.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาววรัญญา อินชัย', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10476.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายณัฐพงษ์ นามคำ', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10477.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวธนัตชนก แก้วยศ', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10478.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายศรายุทธ ผ่องแผ้ว', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10485.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายสุรชัย เจริญศรี', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10486.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นางสาวธัญญรัตน์ มาลา', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10488.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายสุรเวศม์ สุวรรณดำรงผล', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10489.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'ว่าที่ร้อยตรีเมธาวิณทร์ เมษาเทียนจันทร์', image: 'https://www.lannapoly.ac.th/online/Tea_picture/10490.jpg', position: 'ครูเทคโนโลยีสารสนเทศ' },
    { name: 'นายจิรวัฒน์ จอมมณี', image: 'https://www.lannapoly.ac.th/online/Tea_picture/13730.jpg', position: 'นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ' },
    { name: 'นายภคพล กองทุม', image: 'https://www.lannapoly.ac.th/online/Tea_picture/13731.jpg', position: 'นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ' },
  ];

  return (
    <section className="faculty">
      <h2>ทีมคณาจารย์</h2>
      <div className="faculty-list">
        {facultyMembers.map((faculty, index) => (
          <div className="faculty-member" key={index}>
            <img src={faculty.image} alt={faculty.name} className="faculty-image" />
            <h3>{faculty.name}</h3>
            <p>{faculty.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
