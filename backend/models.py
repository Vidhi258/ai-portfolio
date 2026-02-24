from sqlalchemy import Column, Integer, String
from database import Base

class Resume(Base):
    __tablename__ = "resume"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)